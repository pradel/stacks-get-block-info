# stacks-get-block-info

Expose the get-block-info clarity values so they can be used outside of smart
contracts.

## Usage

To access the clarity values, you can use the `@stacks/transactions` package.

```ts
import { callReadOnlyFunction, uintCV } from "@stacks/transactions";
import { StacksMainnet } from "@stacks/network";

const vrfSeedResult = await callReadOnlyFunction({
  contractAddress: "SP3VCX5NFQ8VCHFS9M6N40ZJNVTRT4HZ62WFH5C4Q",
  contractName: "get-block-info",
  functionName: "get-block-info-vrf-seed",
  functionArgs: [uintCV(block.height)],
  network: new StacksMainnet(),
  senderAddress: "SP3VCX5NFQ8VCHFS9M6N40ZJNVTRT4HZ62WFH5C4Q",
});

const vrfBuffer = vrfSeedResult.value.buffer as Buffer;
```

## Deployment

- [SP3VCX5NFQ8VCHFS9M6N40ZJNVTRT4HZ62WFH5C4Q.get-block-info](https://explorer.stacks.co/txid/SP3VCX5NFQ8VCHFS9M6N40ZJNVTRT4HZ62WFH5C4Q.get-block-info?chain=mainnet)
