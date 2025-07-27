import React, { useState } from 'react';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import { sendEncryptedStep, createDeal } from './api';

export default function App() {
  const [dealId, setDealId] = useState('');
  const [step, setStep] = useState('');

  const handleCreate = async () => {
    await createDeal(dealId);
  };

  const handleAdd = async () => {
    await sendEncryptedStep(dealId, step);
    setStep('');
  };

  return (
    <TonConnectUIProvider>
      <div>
        <TonConnectButton />
        <h1>Letter L Deal Ledger</h1>
        <input value={dealId} onChange={e => setDealId(e.target.value)} placeholder="deal id" />
        <button onClick={handleCreate}>Create Deal</button>
        <textarea value={step} onChange={e => setStep(e.target.value)} placeholder="step" />
        <button onClick={handleAdd}>Add Step</button>
      </div>
    </TonConnectUIProvider>
  );
}
