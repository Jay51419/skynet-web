import { Component, createEffect, onMount } from "solid-js";
import { Routes, Route, useNavigate } from "@solidjs/router";

import Home from "./home";
import Recharge from "./recharge";
import Profile from "./profile";
import Support from "./support";
import Header from "./components/header";
import Login from "./login";
import ChangePassword from "./change-password";
const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/recharge" component={Recharge} />
      <Route path="/profile" component={Profile} />
      <Route path="/support" component={Support} />
      <Route path="/change-password" component={ChangePassword} />
    </Routes>
  );
};

export default App;
