import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudioLayout } from "./layouts";
import {
  Builder,
  Dashboard,
  MaterialUI,
  ReactPrime,
  Settings,
  ShadCN,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={StudioLayout}>
          <Route path="dashboard" Component={Dashboard} />
          <Route path="mui" Component={MaterialUI} />
          <Route path="shadcn" Component={ShadCN} />
          <Route path="react-prime" Component={ReactPrime} />
          <Route path="builder" Component={Builder} />
          <Route path="settings" Component={Settings} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
