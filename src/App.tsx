import React from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Toaster richColors theme="dark" />
      <Router />
    </Provider>
  );
};

export default App;
