---
sidebar_position: 1
title: zkTLS Explained
---

# zkTLS Explained

> zkTLS (Zero-Knowledge TLS) is a cryptographic technology that verifies the authenticity of TLS data without exposing the data itself.

## 🎯 Core Concept

**zkTLS = TLS + Zero-Knowledge Proofs**

- **TLS**: The standard protocol for securing data transfer on the internet (used when you visit HTTPS websites)
- **Zero-Knowledge Proof**: A cryptographic technique that proves "I know something" without revealing the actual content

**Simple analogy**: Like proving to a bartender you're over 18 without showing your ID card's specific details (name, address, etc.).

## 🏗️ Two Operating Modes

Primus provides two zkTLS modes, each with trade-offs:

### Mode 1: MPC Mode (Recommended for High Security)

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│  Client  │◀───────▶│ Attestor │◀───────▶│  Server  │
│          │  MPC    │          │  TLS    │  (Data   │
│          │ Protocol│          │         │  Source) │
└──────────┘         └──────────┘         └──────────┘
```

**How it works**:
1. Client and attestor collaboratively execute a Multi-Party Computation (MPC) protocol
2. Together generate the keys needed to establish a TLS session with the data source
3. Client cannot control or modify TLS data before attestor sends its key share

**Advantages**:
- 🔒 **Highest security**: Client cannot tamper with data
- ✅ **Trustless**: No need to trust a single attestor
- 🚀 **High performance**: Uses QuickSilver interactive ZK proof system

**Disadvantages**:
- Slightly higher computational overhead (requires MPC protocol)

**Use cases**: Financial transactions, identity verification, and other high-security scenarios

---

### Mode 2: Proxy Mode (Recommended for High Performance)

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│  Client  │◀───────▶│ Attestor │◀───────▶│  Server  │
│          │  TLS    │ (records │  TLS    │          │
│          │ traffic │ ciphertext)│       │          │
└──────────┘         └──────────┘         └──────────┘
```

**How it works**:
1. Attestor acts as intermediary, forwarding TLS traffic between client and server
2. Attestor records all ciphertexts exchanged
3. At session end, client must prove to attestor it knows the plaintext underlying the ciphertexts

**Advantages**:
- ⚡ **Better performance**: Avoids MPC protocol overhead
- 📊 **Simpler**: More intuitive architecture

**Disadvantages**:
- 🔐 **Additional trust**: Attestor must ensure it's connecting to the correct server

**Use cases**: Large-scale data verification, performance-sensitive scenarios

---

## 📊 Mode Comparison

| Feature | MPC Mode | Proxy Mode |
|---------|----------|------------|
| Security | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Performance | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Trustlessness | Complete | Partial |
| Computational Overhead | Medium | Low |
| Recommended For | High security | High performance |

## 🔧 Unified API

Primus' advantage is providing a **unified API**, allowing developers to freely choose modes:

```javascript
// Just change the algorithmType parameter
const config = {
  algorithmType: "mpc",    // or "proxy"
  // ... other config
};
```

## 📈 Technical Advantages

### QuickSilver Interactive Zero-Knowledge Proofs

Innovative system developed by Primus team:
- 🚀 **10x performance** vs traditional solutions
- 📱 **Wide compatibility**: Browsers and mobile apps
- 💾 **Large-scale proofs**: Can prove ChatGPT conversations and more

### Key Derivation Function (KDF) Proofs

Unique advantage of Primus' Proxy mode:
- ✅ Proves KDFs during TLS connection establishment
- ✅ No extra padding needed, more general
- ✅ More efficient than traditional zk-SNARK solutions

## 🎓 Technical Resources

- **Technical Whitepaper**: [zkTLS Paper](https://eprint.iacr.org/2023/964)
- **QuickSilver**: [Interactive ZK Proof System](https://eprint.iacr.org/2021/076)

## 📖 Next Steps

- [zkFHE Network](./zkfhe-network) - Learn about encrypted computation
- [Core SDK Integration](../03-Data-Verification/core-sdk/index) - Get started
- [Developer Hub](../03-Data-Verification/developer-hub) - Create project
