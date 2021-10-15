# Fantom Kittens Subgraph

Trying to learn more about [TheGraph](https://thegraph.com/), I did this simples subgraph where
you can find any information about Kittens.

## The current information is:
- id: Token Id
- owner: Kitten Owner
- tokenURI: URI to fetch Kitten information

## Deploy
Unfortunately, I can't deploy this subgraph in TheGraph platform, because this contract is in 
[Fantom Network](https://fantom.foundation/).

You can deploy your subgraph using:
```
# After create subgraph in platform
graph auth  --studio <api-key>

# Generate typescript autocomplete to the abis
graph codegen 
# Build subgraph
graph build

# Deploy subgraph using TheGraph platform 
yarn deploy
```