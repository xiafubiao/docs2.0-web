---
sidebar_position: 2
title: zkFHE Network
---

# zkFHE Network Architecture

> zkFHE (Zero-Knowledge Fully Homomorphic Encryption) enables computation directly on encrypted data, where the decrypted result matches what would be obtained from computing on the original data.

## 🎯 Core Concept

**zkFHE = Zero-Knowledge Proofs + Fully Homomorphic Encryption**

- **FHE**: Allows computation directly on encrypted data without decryption
- **ZK**: Proves the computation was executed correctly without revealing details

**Simple analogy**: Like locking data in a safe where others can operate machines to process the data from outside the safe, but never see the data itself, and can prove the processing was done correctly.

## 💡 Why zkFHE?

### The Data Value vs Privacy Dilemma

```
┌─────────────────────────────────────────────────────┐
│              The Data Utilization Paradox           │
├─────────────────────────────────────────────────────┤
│  💰 Data has value → Needs to be utilized           │
│  🔒 Privacy needed → Cannot be exposed              │
│  ❓ How to balance? → zkFHE provides solution       │
└─────────────────────────────────────────────────────┘
```

Existing solutions (zero-knowledge proofs, multi-party computation, etc.) cannot fully resolve:
- ❌ The contradiction between privacy protection and data utilization
- ❌ Trusted verification of computation processes
- ❌ Efficient processing of large-scale data

### zkFHE Advantages

| Feature | Description |
|---------|-------------|
| **Customizable Computation** | Execute arbitrary computations on encrypted data |
| **Correctness Guarantee** | Validity proofs ensure entire computation circuit is correct |
| **Cryptographic Trustlessness** | No need to trust computation nodes |
| **Privacy Protection** | Data remains encrypted; computors cannot see it |

## 👥 Network Roles

### 1. Data Provider

**Who**: Individuals or organizations providing computation data

**What they do**:
- Encrypt data using FHE algorithm
- Upload to decentralized storage (Arweave, Filecoin)
- Receive data usage fees

**Benefit**: Earn revenue share when data is used

---

### 2. Worker

**Who**: Nodes in Primus computation network

**What they do**:
- Provide computation resources
- Run zkFHE algorithm on encrypted data
- Generate zero-knowledge proofs
- Provide data encryption public keys
- Re-encrypt computation results

**Benefit**: Earn computation fees for successful task execution

**Requirements**:
- Generate computation proofs
- Provide secure computation environment

---

### 3. Caller

**Who**: Individuals or organizations using network's computation capabilities and data resources

**What they do**:
- Specify encrypted data to initiate computation tasks
- Obtain computation results
- Pay computation fees

**Benefit**: Access privacy-preserving computation services

---

## 🏗️ Network Architecture

### Component Overview

```
┌─────────────────────────────────────────────────────────┐
│              Primus Data Computation Network            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────┐    │
│  │  Worker  │  │Primus Contracts│ │ Primus SDK    │    │
│  │ Compute  │  │Smart Contracts│ │ Developer Tools│    │
│  │  Node    │  │              │  │               │    │
│  └──────────┘  └──────────────┘  └───────────────┘    │
│       │              │                  │              │
│       │              │                  │              │
│       ▼              ▼                  ▼              │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Primus Scan                        │  │
│  │           UI / Explorer                         │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Core Components

| Component | Function |
|-----------|----------|
| **Worker** | Execute confidential computation tasks, generate proofs |
| **Primus Contracts** | Worker management, data management, task management, fee management, incentives |
| **Primus SDK** | Developer tools for building privacy applications |
| **Primus Scan** | Network explorer for viewing workers, data, tasks, etc. |

---

## 🔄 Three Operating Modes

Based on data encryption key classification, zkFHE has three execution modes:

### Mode 1: Threshold FHE

**Technical representative**: Joint-Worker Mode

**Characteristics**:
- Uses shared public key generated by multiple Workers to encrypt data
- Requires multiple Workers to collaborate

**Use case**: Computation tasks requiring multi-party collaboration

---

### Mode 2: Single-Key FHE

**Technical representative**: Single-User Mode

**Characteristics**:
- Uses user's own key to encrypt data
- Caller and Data Provider are the same person
- No result re-encryption needed

**Use case**: Personal data computation

---

### Mode 3: Multi-Key FHE

**Technical representative**: Selective Multi-Worker Mode

**Characteristics**:
- Uses multiple Workers' public keys to encrypt data
- Different from academic Multi-Key FHE algorithm
- Data Provider selects specific Workers' public keys

**Use case**: Scenarios requiring selection of specific computation nodes

---

## 📊 Threshold FHE Workflow

```
┌─────────────┐
│ 1. Worker   │
│ Registration│
└──────┬──────┘
       ▼
┌─────────────┐
│ 2. Task     │
│ Submission  │
└──────┬──────┘
       ▼
┌─────────────┐
│ 3. Data     │
│ Upload      │
└──────┬──────┘
       ▼
┌─────────────┐
│ 4. zkFHE    │
│ Computation │
└──────┬──────┘
       ▼
┌─────────────┐
│ 5. Result   │
│ Re-encryption│
└──────┬──────┘
       ▼
┌─────────────┐
│ 6. Proof    │
│ Verification│
└──────┬──────┘
       ▼
┌─────────────┐
│ 7. Result   │
│ Decryption  │
└─────────────┘
```

### Detailed Steps

1. **Worker Registration**
   - Workers register with Primus contracts
   - Provide name, description, resources, public key, etc.

2. **Task Submission & Key Generation**
   - Caller submits task via SDK
   - Pay computation and data fees
   - Publish own public key (for final result decryption)
   - Contract selects Workers to generate data encryption public keys

3. **Data Upload**
   - Data Provider obtains public keys
   - Encrypts data using FHE
   - Uploads to storage chain (Arweave, etc.)

4. **zkFHE Computation**
   - Workers retrieve task and encrypted data
   - Execute computation and generate validity proof
   - Output encrypted result + proof

5. **Result Re-encryption**
   - Workers who generated public keys re-encrypt result
   - Use caller's public key
   - Ensures only caller can decrypt

6. **Proof Verification & Fee Settlement**
   - Workers upload result and proof
   - Contract verifies proof
   - Fees distributed to data providers and Workers

7. **Result Decryption**
   - Caller decrypts using own private key
   - Obtains raw computation result

---

## 📈 Performance Advantages

| Metric | Primus zkFHE | Traditional |
|--------|--------------|-------------|
| Proving Time | **340x faster** | Baseline |
| Practicality | Production-ready | Mostly theoretical |
| Applications | Confidential voting, auctions, FHE rollups | Limited |

---

## 📖 Next Steps

- [Computation Use Cases](../05-Use-Cases/computation-use-cases.md) - Explore real-world applications
- [Quick Start](../01-Getting-Started/quick-start.md) - Get started with Primus
- [What is Primus?](../01-Getting-Started/what-is-primus.md) - Review core concepts
