import React from 'react';
import WalletContextProvider from './components/WalletProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import BuyNFTButton from './components/BuyNFTButton';
import TransactionHistory from './components/TransactionHistory';
import Whitepaper from './pages/Whitepaper';
import Contact from './pages/Contact';

function App() {
  return (
    <WalletContextProvider>
      <div className="App">
        <header>
          <h1>Block Beast NFTs</h1>
          <WalletMultiButton />
        </header>

        <main>
          <BuyNFTButton nftId="blockbeast001" />
          <TransactionHistory />
          <Whitepaper />
          <Contact />
        </main>

        <footer>
          <p>© 2025 Block Beast | Roadmap & Token Coming Soon</p>
        </footer>
      </div>
    </WalletContextProvider>
  );
}

export default App;