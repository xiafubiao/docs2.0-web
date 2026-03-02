---
sidebar_position: 2
title: What is Primus?
---

# What is Primus?

> Primus (formerly "PADO") is building the future of data interoperability, enabling secure, permissionless data verification and computation for blockchain and AI.

##  Our Mission

Primus' mission is to enable secure, permissionless data verification and computation, connecting blockchain and AI ecosystems.

##  The Problems

### Blockchain's Dilemma
- **Limited on-chain data**: Blockchains can only access on-chain data, unable to leverage rich Web2 data
- **Web2-Web3 fragmentation**: No effective data bridge between the two ecosystems
- **Traditional system limitations**: Cannot provide privacy, scalability, and interoperability

### AI's Trust Crisis
- **Lack of transparency**: Users cannot verify AI's decisions and data handling
- **Security risks**: Concerns about data manipulation and privacy breaches
- **Accountability gaps**: Difficult to trace the source of AI actions

##  Primus' Solution

We provide a **cryptographic layer** that securely connects off-chain data with blockchain and AI systems:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Web2 Data  │ ──▶ │ Primus Crypto│ ──▶ │ Blockchain/ │
│  (Off-chain)│     │  Layer       │     │ AI (On-chain)│
│             │     │ (zkTLS+zkFHE)│     │             │
└─────────────┘     └──────────────┘     └─────────────┘
```

### Core Technologies

Primus focuses on two key innovations:

| Technology | Purpose | Description |
|------------|---------|-------------|
| **zkTLS** | Data Verification | Adds zero-knowledge proofs to TLS protocol, verifying data authenticity without exposing the data itself |
| **zkFHE** | Encrypted Computation | Secure computation on encrypted data, ensuring trustworthy results even when outsourced |

### Developer Friendly

Primus provides easy-to-use APIs, acting as a bridge between foundational blockchain/AI ecosystems and the applications built on top.

##  Next Steps

- [Why Primus?](./why-primus) - Learn about Primus' core advantages
- [zkTLS Explained](../02-Core-Concepts/zktls-explained) - Deep dive into data verification
- [zkFHE Network](../02-Core-Concepts/zkfhe-network) - Explore encrypted computation

##  Technical Resources

- **zkTLS Whitepaper**: [Read Paper](https://eprint.iacr.org/2023/964)
- **QuickSilver**: [Interactive ZK Proof System](https://eprint.iacr.org/2021/076)
- **zkFHE Technology**: [GINX Paper](https://eprint.iacr.org/2014/283.pdf)
