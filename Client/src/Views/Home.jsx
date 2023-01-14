import React from 'react';

import { PageHOC } from "../Components/Index"

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">Soft Cards</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
      <p className="text-xl p-3">Made with 🖤 by Abdul-Quayyum Alao</p>
    </div>
  )
};

export default PageHOC(
  Home,
);