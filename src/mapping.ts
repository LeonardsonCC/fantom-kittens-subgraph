import {
  FantomKittens,
  Transfer as TransferEvent,
} from "../generated/FantomKittens/FantomKittens";
import { Kitten } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let kitten = Kitten.load(event.params.tokenId.toString());
  if (!kitten) {
    kitten = new Kitten(event.params.tokenId.toString());
    kitten.id = event.params.tokenId.toString();

    let fantomKittensContract = FantomKittens.bind(event.address);
    kitten.tokenURI = fantomKittensContract.tokenURI(event.params.tokenId);
  }

  kitten.owner = event.params.to;
  kitten.save();
}
