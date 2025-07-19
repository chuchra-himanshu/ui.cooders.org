import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout, GlobalLayout } from "./layouts";
import {
  ChangePassword,
  Community,
  Dashboard,
  EmailVerification,
  ForgetPassword,
  Notebook,
  SignIn,
  SignUp,
  SolveX,
  Studio,
  TwoFactorAuthentication,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="" Component={Dashboard} />
          <Route path="studio" Component={Studio} />
          <Route path="community" Component={Community} />
          <Route path="solvex" Component={SolveX} />
          <Route path="notebook" Component={Notebook} />
        </Route>
        <Route path="/" Component={AuthLayout}>
          <Route path="signin" Component={SignIn} />
          <Route path="signup" Component={SignUp} />
          <Route path="forgets/password" Component={ForgetPassword} />
          <Route path="updates/password" Component={ChangePassword} />
          <Route path="validates/email" Component={EmailVerification} />
          <Route path="validates/tfa" Component={TwoFactorAuthentication} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
