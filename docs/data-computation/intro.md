---
sidebar_position: 1
title: Introduction to Data Computation
---

# Introduction to Data Computation

> Privacy-preserving computation with zkFHE technology

## 🎯 Overview

Primus Data Computation Network enables secure, verifiable computation on encrypted data using zkFHE (Zero-Knowledge Fully Homomorphic Encryption) technology.

## 🔑 Key Features

- **Privacy-Preserving**: Compute on encrypted data without decryption
- **Verifiable**: Zero-knowledge proofs ensure computation correctness
- **Scalable**: Distributed worker network for parallel computation
- **Chain-Agnostic**: Works across multiple blockchains

## 👥 Network Roles

| Role | Function | Incentive |
|------|----------|-----------|
| **Data Provider** | Provides encrypted data | Earns data usage fees |
| **Worker** | Executes computation | Earns computation fees |
| **Caller** | Initiates tasks | Gets private computation results |

## 🔄 Computation Modes

### Single-Key FHE
- User encrypts data with own key
- Best for personal computation
- No re-encryption needed

### Threshold FHE
- Multiple workers generate encryption key
- Best for collaborative computation
- Requires key sharing

### Multi-Key FHE
- Uses multiple worker public keys
- Best for selective worker computation
- Flexible worker selection

## 📊 Workflow Summary

```
1. Worker Registration → 2. Task Submission → 3. Data Upload
                                              ↓
7. Result Decryption ← 6. Fee Settlement ← 5. Result Re-encryption
                              ↑
                        4. zkFHE Computation
```

## 🚀 Getting Started

- [Quick Start](../01-Getting-Started/quick-start) - Overall getting started guide
- [zkFHE Network Architecture](../02-Core-Concepts/zkfhe-network) - Technical deep dive
- [Computation Use Cases](../05-Use-Cases/computation-use-cases) - Real-world applications

## 📞 Need Help?

Join our [Discord Community](https://discord.gg/AYGSqCkZTz) for support!
