import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudioLayout } from "./layouts";
import { Community, Dashboard, Settings, Studio } from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={StudioLayout}>
          <Route path="" Component={Dashboard} />
          <Route path="studio" Component={Studio} />
          <Route path="community" Component={Community} />
          <Route path="settings" Component={Settings} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
