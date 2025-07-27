export async function encryptStep(text) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(text)
  );
  return { ciphertext: Buffer.from(ciphertext).toString('base64'), iv: Buffer.from(iv).toString('base64') };
}
