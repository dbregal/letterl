# Letter L — Encrypted Deal Ledger on TON

This repository contains an early MVP for Letter L, a prototype system for recording encrypted deal steps on the TON blockchain. Smart contracts are written in Tact and the frontend is built with React and TonConnect.

## Structure

```
/contracts        – Tact smart contracts
/src              – React frontend code
/utils/crypto     – client side encryption helpers
/data/ipfs        – placeholder for off-chain stored files
```

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Compile the smart contract (requires Tact installed):

```bash
tact compile contracts/DealLedger.tact
```

## Demo case

A simple demonstration can be done by running the frontend, creating a deal and adding three steps between two participants. The steps are encrypted locally and their hashes would be recorded on-chain.
