# Magic Swapper Move Contract

This repository contains scripts for an arbitrage bot on the Sui blockchain. A new Move package `MagicSwapper` provides an on-chain helper module for performing chained swaps within a single transaction. The `SwapChain` module exposes generic functions that delegate swap logic to underlying DEX pools and allow chaining two or three swaps in sequence.

The Move package can be built with the Sui toolchain.
