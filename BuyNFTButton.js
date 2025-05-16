import React from 'react';

const BuyNFTButton = ({ nftId }) => {
  const handleBuy = () => {
    alert(`Buying NFT: ${nftId}`);
  };

  return (
    <button onClick={handleBuy}>
      Buy NFT
    </button>
  );
};

export default BuyNFTButton;