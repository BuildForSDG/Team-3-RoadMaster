import React from "react";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRegister from "./pages/UserRegister";
import DashboardHome from "./pages/DashboardHome";
import DashboardHomeUser from "./pages/DashboardHomeUser";
import BuyCoins from "./pages/BuyCoins";
import UserLogin from "./pages/UserLogin";
import DashboardCrashes from "./pages/DashboardCrashes";
import DashboardReports from "./pages/DashboardReports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user-login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user-register">
          <UserRegister />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/dashboard">
          <DashboardHome />
        </Route>
        <Route path="/user-dashboard">
          <DashboardHomeUser />
        </Route>
        <Route path="/buy-coins">
          <BuyCoins />
        </Route>
        <Route path="/crashes">
          <DashboardCrashes />
        </Route>
        <Route path="/reports">
          <DashboardReports />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
