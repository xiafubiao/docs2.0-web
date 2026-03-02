---
sidebar_position: 1
title: Core SDK
---

# Core SDK Integration Guide

> Core SDK is for integrating data verification into **backend servers**, verifying data through webpage endpoint responses.

## 🎯 Use Cases

- ✅ Backend servers need to verify user data
- ✅ Repeated verification without additional calls
- ✅ Enterprise application integration

**Note**: For frontend dApp integration, see [zkTLS SDK Guide](../zk-tls-sdk/index)

---

## 🚀 Quick Start

### Step 1: Create Project

Create a project in [Primus Developer Hub](https://dev.primuslabs.xyz) to obtain:
- `appID`
- `appSecret`

### Step 2: Install SDK

```bash
npm install @padolabs/core-sdk
```

### Step 3: Configure SDK

```javascript
const CoreSDK = require('@padolabs/core-sdk');

const sdk = new CoreSDK({
  appId: 'your-app-id',
  appSecret: 'your-app-secret',
  algorithmType: 'proxy'  // or 'mpc'
});
```

### Step 4: Configure Verification Parameters

```javascript
const config = {
  // Request parameters
  requestParams: {
    url: 'https://api.example.com/data',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer token'
    }
  },
  // Response data paths
  responsePaths: {
    balance: '$.data.balance',
    userId: '$.data.user.id'
  }
};
```

### Step 5: Execute Verification

```javascript
try {
  const result = await sdk.verify(config);
  
  if (result.valid) {
    console.log('Verification successful!');
    console.log('Verified data:', result.data);
    
    // Execute subsequent business logic
    // e.g., submit on-chain proof, update user status, etc.
  } else {
    console.log('Verification failed');
  }
} catch (error) {
  console.error('Verification error:', error);
}
```

---

## 📋 Core Concepts

### Two Verification Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **Proxy TLS** | Attestor forwards TLS traffic as proxy | High performance needs |
| **MPC TLS** | Multi-party collaborative verification | High security needs |

Select via `algorithmType` parameter:
```javascript
algorithmType: 'proxy'  // or 'mpc'
```

### Authorization Token

Core SDK requires authorization token to request private data:
- Automatically generated when creating project in Developer Hub
- Keep `appSecret` secure, never expose
- Configure in backend server

---

## 🔄 Workflow

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│1. Create    │───▶│2. Configure  │───▶│3. Execute   │
│   Project   │    │   Parameters │    │   Protocol  │
│Get credentials│  │Set verification│ │Call SDK     │
└─────────────┘    └──────────────┘    └─────────────┘
                                          │
                                          ▼
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│6. Business  │◀───│5. Verify     │◀───│4. Get       │
│   Logic     │    │   Signature  │    │   Results   │
│Submit etc.  │    │Confirm trust │    │Verify data  │
└─────────────┘    └──────────────┘    └─────────────┘
```

### Detailed Steps

1. **Create Project**
   - Visit [Developer Hub](https://dev.primuslabs.xyz)
   - Create new project
   - Obtain `appID` and `appSecret`

2. **Configure Verification Parameters**
   - Set request parameters (URL, method, headers)
   - Configure response data paths (JSONPath format)
   - See [Simple Example](./simple-example)

3. **Execute zkTLS Protocol**
   - Call SDK through server
   - Initiate data verification process

4. **Get Verification Results**
   - SDK returns verification result
   - Includes verified data and signature

5. **Verify Signature**
   - Verify Primus signature for trustworthiness
   - Confirm result hasn't been tampered

6. **Execute Business Logic**
   - Process business based on verification result
   - e.g., submit on-chain proof, update user status

---

## 📖 Related Documentation

- [Simple Example](./simple-example) - Complete code example
- [Installation](./installation) - Detailed installation steps
- [Developer Hub](../developer-hub) - Project management

---

## ⚠️ Important Notes

### Security Best Practices

- 🔒 Store `appSecret` only on backend server
- 🔒 Never expose `appSecret` to frontend
- 🔒 Use environment variables for sensitive information

### Performance Optimization

- ⚡ Supports repeated verification without additional calls
- ⚡ Configure caching strategies appropriately
- ⚡ Batch verification requests

---

## 📞 Get Help

Need help? Join our [Discord Community](https://discord.gg/AYGSqCkZTz) for technical support!
