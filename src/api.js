import { encryptStep } from '../utils/crypto/encryption';

export async function createDeal(dealId) {
  console.log('creating deal', dealId);
  // TODO: call smart contract via TON Connect
}

export async function sendEncryptedStep(dealId, text) {
  const encrypted = await encryptStep(text);
  console.log('sending encrypted step', dealId, encrypted);
  // TODO: store in IPFS and send hash to smart contract
}
