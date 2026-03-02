---
sidebar_position: 2
title: zkTLS SDK
---

# zkTLS SDK Integration Guide

> zkTLS SDK is for integrating data verification into **frontend dApps**, allowing users to verify their own off-chain data.

## 🎯 Use Cases

- ✅ Frontend applications (React, Vue, vanilla JS, etc.)
- ✅ User needs to verify personal data
- ✅ dApp interaction with off-chain data

**Note**: For backend server integration, see [Core SDK Guide](../core-sdk/index)

---

## 🚀 Quick Start

### Step 1: Install SDK

```bash
npm install @padolabs/mpctls-js-sdk
```

### Step 2: Initialize SDK

```javascript
import MPCTLSJSSDK from "@padolabs/mpctls-js-sdk";

const sdk = new MPCTLSJSSDK();

// Initialize (requires dApp identifier)
await sdk.init("your-dapp-symbol");
```

### Step 3: Start Verification

```javascript
const result = await sdk.startAttestation({
  chainID: 56,              // Chain ID (from supported list)
  walletAddress: "0x...",   // User wallet address
  attestationTypeID: "9",   // Attestation type ID
  attestationParameters: ["100"]  // Verification parameters
});
```

### Step 4: Verify Result

```javascript
const isValid = sdk.verifyAttestation(result);
console.log('Verification result:', isValid);  // true or false
```

### Step 5: Submit to Blockchain

```javascript
const txHash = await sdk.sendToChain(result, window.ethereum);
console.log('Transaction hash:', txHash);
console.log('View transaction:', `https://bascan.io/attestation/${txHash}`);
```

---

## 📋 Complete Example

```javascript
import MPCTLSJSSDK from "@padolabs/mpctls-js-sdk";

async function verifyUserData() {
  const sdk = new MPCTLSJSSDK();
  
  try {
    // 1. Initialize SDK
    const version = await sdk.init("my-dapp");
    console.log('SDK Version:', version);
    
    // View supported chains and attestation types
    console.log('Supported chains:', sdk.supportedChainList);
    console.log('Supported attestation types:', sdk.supportedAttestationTypeList);
    
    // 2. Start verification
    const result = await sdk.startAttestation({
      chainID: 56,
      walletAddress: "0x1234567890abcdef",
      attestationTypeID: "9",
      attestationParameters: ["100"]
    });
    
    // 3. Verify result
    const isValid = sdk.verifyAttestation(result);
    console.log('Verification valid:', isValid);
    
    // 4. Submit to blockchain
    const txUrl = await sdk.sendToChain(result, window.ethereum);
    console.log('Transaction URL:', txUrl);
    
    return { success: true, result, txUrl };
    
  } catch (error) {
    console.error('Verification failed:', error.code, error.message);
    alert(`Verification failed, code: ${error.code}, message: ${error.message}`);
    return { success: false, error };
  }
}
```

---

## 📋 Parameter Details

### startAttestation Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chainID` | number | ✅ | Blockchain ID, select from `supportedChainList` |
| `walletAddress` | string | ✅ | User wallet address |
| `attestationTypeID` | string | ✅ | Attestation type ID, from `supportedAttestationTypeList` |
| `attestationParameters` | string[] | ✅ | Verification parameters, based on attestation type |

### Supported Chains (Example)

```javascript
sdk.supportedChainList
// [
//   { chainID: 56, name: "BNB Chain" },
//   { chainID: 59144, name: "Linea Mainnet" },
//   { chainID: 11155111, name: "Sepolia Testnet" },
//   ...
// ]
```

### Supported Attestation Types (Example)

```javascript
sdk.supportedAttestationTypeList
// [
//   { id: "9", name: "Proof of Assets", requiredParams: ["amount"] },
//   { id: "10", name: "Identity Verification", requiredParams: ["username"] },
//   ...
// ]
```

---

## ⚠️ Important Notes

### Development Environment

- ✅ Works directly for local debugging
- ✅ No domain registration required
- ✅ Requires Primus browser extension (v0.3.15+)

### Production Environment

- ⚠️ **dApp domain registration required** for whitelist
- ⚠️ Contact Primus team for production support
- ⚠️ Reach out via [Discord Community](https://discord.gg/AYGSqCkZTz)

### Browser Extension

Users need Primus browser extension for MPC-TLS mode:

- [Download Extension](https://dev.primuslabs.xyz)
- Minimum version: 0.3.15
- Supported browsers: Chrome, Edge, Firefox

---

## 🔧 Error Handling

### Common Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| `00001` | SDK not initialized | Call `init()` method first |
| `00006` | Extension not detected | Install Primus extension 0.3.15+ |
| `00007` | Insufficient wallet balance | Ensure wallet has enough gas |
| `00008` | On-chain submission failed | Check network and wallet connection |
| `00009` | dApp not registered | Contact Primus team to register |
| `10001-10004` | Network issues | Check connection, retry |

### Error Handling Best Practices

```javascript
try {
  const result = await sdk.startAttestation(params);
} catch (error) {
  if (error.code === '00006') {
    alert('Please install Primus browser extension first');
    window.open('https://dev.primuslabs.xyz', '_blank');
  } else if (error.code === '00007') {
    alert('Insufficient wallet balance, please recharge and retry');
  } else {
    alert(`Verification failed, code: ${error.code}`);
  }
}
```

**Full Error Code List**: [Error Code Reference](../../06-Resources/error-codes)

---

## 📖 Related Documentation

- [Installation](./installation) - Detailed installation steps
- [Parameter Examples](./example) - Detailed parameter guide
- [Error Codes](../../06-Resources/error-codes) - Complete error code list

---

## 📞 Get Help

Need help? Join our [Discord Community](https://discord.gg/AYGSqCkZTz) for technical support!
