import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import SellerPage from "../pages/seller";
import SellersPage from "../pages/sellers";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/seller" component={SellersPage} />
        <Route path="/seller/:id" component={SellerPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </HashRouter>
  );
}
