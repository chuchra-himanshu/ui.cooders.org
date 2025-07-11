import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudioLayout } from "./layouts";
import {
  Builder,
  Dashboard,
  MaterialUI,
  PrimeReact,
  Settings,
  ShadCN,
  Studio,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={StudioLayout}>
          <Route path="" Component={Dashboard} />
          <Route path="studio" Component={Studio} />
          <Route path="mui" Component={MaterialUI} />
          <Route path="shadcn" Component={ShadCN} />
          <Route path="prime-react" Component={PrimeReact} />
          <Route path="builder" Component={Builder} />
          <Route path="settings" Component={Settings} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
