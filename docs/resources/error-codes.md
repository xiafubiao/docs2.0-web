---
sidebar_position: 1
title: Error Codes
---

# Error Code Reference

Complete list of error codes for Primus SDKs.

---

##  General Errors

| Error Code | Situation | Solution |
|------------|-----------|----------|
| `00001` | zkTLS algorithm not initialized | Restart the verification process |
| `00002` | Process did not respond within 5 minutes | Check network, retry |
| `00003` | Verification process already in progress | Wait and try again later |
| `00004` | User closed or cancelled attestation | Restart if needed |
| `00005` | Invalid parameters | Check parameter format and values |
| `00006` | Extension not detected | Install Primus extension v0.3.15+ |
| `00007` | Insufficient wallet balance | Add funds to wallet |
| `00008` | On-chain submission failed | Check network and wallet connection |
| `00009` | dApp not registered | Contact Primus team |
| `99999` | Undefined error | Contact Primus team for support |

---

##  Data Source Related Errors

| Error Code | Situation | Solution |
|------------|-----------|----------|
| `00102` | Insufficient assets balance | Verify account has required balance |
| `00104` | Attestation requirements not met | Check requirements and retry |

---

##  zkTLS Related Errors

| Error Code | Situation | Solution |
|------------|-----------|----------|
| `10001` | Unstable internet connection | Check network stability |
| `10002` | Attestation interrupted (network error) | Retry verification |
| `10003` | Cannot connect to attestation server | Check internet connection |
| `10004` | Cannot connect to data source server | Check internet, verify data source |
| `20005` | Workflow error | Retry, contact support if persists |
| `30001-30004` | Response error | Retry verification |
| `50007` | Algorithm execution error | Contact support |
| `50008` | Abnormal execution results | Retry, contact support |
| `50009` | Algorithm service timeout (5 min) | Retry |
| `50010` | Compatibility issues | Check browser/extension version |
| `50011` | Algorithm version mismatch | Update extension to latest |

---

##  Troubleshooting Guide

### SDK Initialization Issues

**Error**: `00006` - Extension not detected

**Steps**:
1. Install Primus browser extension
2. Ensure version is 0.3.15 or higher
3. Refresh the page
4. Try again

---

### Network Issues

**Errors**: `10001`, `10002`, `10003`, `10004`

**Steps**:
1. Check internet connection
2. Verify firewall settings
3. Try different network
4. Retry verification

---

### On-Chain Submission Issues

**Error**: `00007`, `00008`

**Steps**:
1. Check wallet balance (need gas)
2. Verify wallet is connected
3. Check network congestion
4. Retry transaction

---

### dApp Registration Issues

**Error**: `00009` - dApp not registered

**Steps**:
1. For development: works locally without registration
2. For production: contact Primus team via Discord
3. Provide domain name for whitelist

---

##  Get Help

For error codes not listed here or persistent issues:

- Join [Discord Community](https://discord.gg/AYGSqCkZTz)
- Contact Primus team for support
- Provide error code and steps to reproduce
