import React from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ThemeContextProvider from "./context/ThemeColor";
import RoutesPage from "./routes";

const App = () => {
  return (
    <ThemeContextProvider>
      <UserAuthContextProvider>
        <RoutesPage />
      </UserAuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
