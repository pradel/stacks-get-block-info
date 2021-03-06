import {
  Account,
  Chain,
  Clarinet,
  Tx,
  types,
} from "https://deno.land/x/clarinet@v0.14.0/index.ts";
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";

Clarinet.test({
  name: "Can get get-block-info time",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-time",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome().expectUint(0);
  },
});

Clarinet.test({
  name: "Can get get-block-info header-hash",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-header-hash",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome();
    assertEquals(typeof block.receipts[0].result, "string");
  },
});

Clarinet.test({
  name: "Can get get-block-info burnchain-header-hash",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-burnchain-header-hash",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome();
    assertEquals(typeof block.receipts[0].result, "string");
  },
});

Clarinet.test({
  name: "Can get get-block-info id-header-hash",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-id-header-hash",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome();
    assertEquals(typeof block.receipts[0].result, "string");
  },
});

Clarinet.test({
  name: "Can get get-block-info miner-address",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-miner-address",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome();
    assertEquals(typeof block.receipts[0].result, "string");
  },
});

Clarinet.test({
  name: "Can get get-block-info vrf-seed",
  fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    const block = chain.mineBlock([
      Tx.contractCall(
        "get-block-info",
        "get-block-info-vrf-seed",
        [types.uint(0)],
        wallet_1.address,
      ),
    ]);
    block.receipts[0].result.expectSome();
    assertEquals(typeof block.receipts[0].result, "string");
  },
});
