---
sidebar_position: 3
title: Developer Hub
---

# Developer Hub Guide

> Primus Developer Hub is the unified platform for managing projects, obtaining API credentials, and configuring verification parameters.

## 🌐 Access URL

[https://dev.primuslabs.xyz](https://dev.primuslabs.xyz)

---

## 🚀 Quick Start

### Step 1: Register/Login

1. Visit [Developer Hub](https://dev.primuslabs.xyz)
2. Login with wallet address (supports MetaMask, etc.)
3. Complete account registration

### Step 2: Create Project

1. Click **"Create Project"** button
2. Fill in project information:
   - Project name
   - Project description
   - Project type (dApp/Backend service)
3. Select target blockchain
4. Click **"Create"**

### Step 3: Obtain Credentials

After creation, you'll receive:
- `appID` - Project identifier
- `appSecret` - Project secret key (**shown only once, save immediately**)

### Step 4: Configure Verification

1. Go to project details page
2. Click **"Configure Verification"**
3. Set verification parameters:
   - Request parameters (URL, method, headers)
   - Response data paths (JSONPath format)
4. Save configuration

---

## 📋 Project Management

### Project List

In the project list, you can:
- ✅ View all projects
- ✅ Search for specific projects
- ✅ Access project details
- ✅ Create new projects

### Project Details

Each project contains:

| Field | Description |
|-------|-------------|
| Project ID | Unique identifier |
| appID | API call credential |
| appSecret | API key (sensitive) |
| Created At | Project creation date |
| Status | Enabled/Disabled |
| Call Statistics | API call count |

### Project Settings

- **Basic Info**: Modify project name, description
- **API Credentials**: View appID, reset appSecret
- **Verification Config**: Manage verification parameters
- **Usage Stats**: View API usage
- **Domain Management**: Configure production domain whitelist

---

## 🔧 Verification Configuration

### Request Parameters Configuration

```json
{
  "url": "https://api.example.com/data",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer ${USER_TOKEN}",
    "Content-Type": "application/json"
  },
  "queryParams": {
    "userId": "${USER_ID}"
  }
}
```

### Response Data Paths Configuration

Use JSONPath syntax to extract data for verification:

```json
{
  "balance": "$.data.balance",
  "userId": "$.data.user.id",
  "username": "$.data.user.name",
  "accountStatus": "$.data.account.status"
}
```

### Verification Type Selection

Choose verification type based on business needs:

| Type | Description | Use Case |
|------|-------------|----------|
| Proof of Assets | Verify account asset balance | Lending, trading |
| Identity Verification | Verify user identity | KYC, social |
| Transaction History | Verify transaction records | Credit assessment |
| Custom Verification | Custom verification logic | Special scenarios |

---

## 📊 Usage Statistics

### Real-time Data

- Today's calls
- This month's calls
- Total calls
- Success rate

### Historical Trends

- Call volume trends
- Error rate trends
- Response time statistics

### Export Reports

Support CSV/Excel format usage reports export.

---

## 🔒 Security Best Practices

### Credential Management

- 🔒 **appSecret shown only once**, save immediately after creation
- 🔒 Never commit appSecret to code repository
- 🔒 Use environment variables for credentials
- 🔒 Reset appSecret periodically

### Domain Whitelist

Production environment requires domain whitelist configuration:

1. Go to project settings
2. Click **"Domain Management"**
3. Add domains allowed to call API
4. Save configuration

**Note**: API calls from domains not in whitelist will fail.

---

## 📖 Related Documentation

- [Core SDK Integration](./core-sdk/index.md) - Backend server integration
- [zkTLS SDK Integration](./zk-tls-sdk/index.md) - Frontend dApp integration
- [Error Codes](../06-Resources/error-codes.md) - Complete error code list

---

## 📞 Get Help

Need help? Join our [Discord Community](https://discord.gg/AYGSqCkZTz) for technical support!
