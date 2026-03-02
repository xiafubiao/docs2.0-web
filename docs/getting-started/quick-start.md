---
sidebar_position: 1
title: 🚀 Quick Start
---

# Quick Start Guide

> Get started with Primus in 5 minutes

## 🎯 Choose Your Integration

Select the integration method that fits your use case:

### Option 1: Frontend dApp Integration (Recommended for Beginners)

If you're building a frontend application (React, Vue, etc.) and need users to verify off-chain data:

```bash
# 1. Install SDK
npm install @padolabs/mpctls-js-sdk
```

```javascript
// 2. Initialize SDK
import MPCTLSJSSDK from "@padolabs/mpctls-js-sdk";

const sdk = new MPCTLSJSSDK();
await sdk.init("your-dapp-symbol");

// 3. Start verification
const result = await sdk.startAttestation({
  chainID: 56,              // Select supported chain
  walletAddress: "0x...",   // User wallet address
  attestationTypeID: "9",   // Select attestation type
  attestationParameters: ["100"]  // Verification parameters
});

// 4. Verify result
const isValid = sdk.verifyAttestation(result);

// 5. Submit to blockchain
const txHash = await sdk.sendToChain(result, window.ethereum);
console.log(`Transaction: https://bascan.io/attestation/${txHash}`);
```

**Full Guide**: [zkTLS SDK Integration](./03-Data-Verification/zk-tls-sdk/index.md)

---

### Option 2: Backend Server Integration

If you need to verify data on your backend server (e.g., verify user webpage access records):

```bash
# 1. Install Core SDK
npm install @padolabs/core-sdk
```

```javascript
// 2. Create project in Developer Hub to get appID and appSecret
// https://dev.primuslabs.xyz

// 3. Configure verification parameters
const config = {
  appId: "your-app-id",
  appSecret: "your-app-secret",
  algorithmType: "proxy",  // or "mpc"
  requestParams: { /* request parameters */ },
  responsePaths: { /* response data paths */ }
};

// 4. Execute verification
const verificationResult = await coreSDK.verify(config);

// 5. Execute business logic based on result
if (verificationResult.valid) {
  // Submit on-chain proof or other operations
}
```

**Full Guide**: [Core SDK Integration](./03-Data-Verification/core-sdk/index.md)

---

## 📋 Prerequisites

Before you begin, ensure you have:

- [ ] Node.js environment (v14+)
- [ ] Wallet (e.g., MetaMask) for on-chain interactions
- [ ] [Primus Browser Extension](https://dev.primuslabs.xyz) (for MPC-TLS mode)
- [ ] Project created in [Developer Hub](https://dev.primuslabs.xyz)

## 🎯 Verification Flow Overview

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌─────────────┐
│   1. Init    │───▶│  2. Configure │───▶│  3. Execute  │───▶│  4. Result   │
│  Get SDK    │    │  Set params   │    │  Run zkTLS   │    │  Verify sig  │
└─────────────┘    └──────────────┘    └─────────────┘    └─────────────┘
                                                          │
                                                          ▼
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  6. Business │◀───│  5. On-chain  │◀───│  Confirmed  │
│  Logic      │    │  Submit proof │    │  Valid      │
└─────────────┘    └──────────────┘    └─────────────┘
```

## ⚠️ Important Notes

### Development Environment
- ✅ Local debugging works directly
- ✅ No domain registration required for testing

### Production Environment
- ⚠️ **Domain registration required** for whitelist
- ⚠️ Contact Primus team for production support

### Common Issues

| Issue | Solution |
|-------|----------|
| SDK init failed | Check extension installed (v0.3.15+) |
| Verification timeout | Check network, retry |
| On-chain submit failed | Ensure wallet has sufficient gas |

**Full Error Codes**: [Error Code Reference](./06-Resources/error-codes.md)

## 📞 Get Help

Need help? Join our [Discord Community](https://discord.gg/AYGSqCkZTz) for technical support!

## 📖 Next Steps

- [Core SDK Guide](./03-Data-Verification/core-sdk/index.md)
- [zkTLS SDK Guide](./03-Data-Verification/zk-tls-sdk/index.md)
- [Developer Hub](./03-Data-Verification/developer-hub.md)
