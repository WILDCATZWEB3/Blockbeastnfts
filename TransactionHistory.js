import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const TransactionHistory = () => {
  const { publicKey } = useWallet();
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    if (!publicKey) return;

    const getTransactions = async () => {
      const response = await fetch(`https://public-api.solscan.io/account/transactions?account=${publicKey.toString()}`);
      const data = await response.json();
      setTxs(data.slice(0, 10));
    };

    getTransactions();
  }, [publicKey]);

  return (
    <div>
      <h2>Recent Transactions</h2>
      {txs.map((tx, i) => (
        <div key={i}>
          <p>Tx Hash: {tx.txHash}</p>
          <p>Time: {new Date(tx.blockTime * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;