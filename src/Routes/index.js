import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./../Screens/LandingPage";
import BexToolsBoard from "./../Screens/BexToolsBoard";
import PairExplorer from "./../Screens/PairExplorer";
import BigSwapExplorer from "./../Screens/BigSwapExplorer";
import MultiSwap from "./../Screens/MultiSwap";
import WalletInfo from "./../Screens/WalletInfo";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/bextools-board" component={BexToolsBoard} />
        <Route exact path="/pair-explorer" component={PairExplorer} />
        <Route exact path="/big-swap-explorer" component={BigSwapExplorer} />
        <Route exact path="/multi-swap" component={MultiSwap} />
        <Route exact path="/wallet-info" component={WalletInfo} />
      </Switch>
    </>
  );
}

export default Routes;
