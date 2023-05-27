import React, { useState } from "react";
import { Navbar, Welcome, Footer, Services, Transactions, MarketTable } from "./components";

const App = () => {
  const [scrollToMarketTable, setScrollToMarketTable] = useState(false);

  const handleMarketClick = () => {
    setScrollToMarketTable(true);
  };

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar handleMarketClick={handleMarketClick} />
        <Welcome />
        {scrollToMarketTable && <MarketTable />} {/* Render MarketTable when scrollToMarketTable is true */}
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
