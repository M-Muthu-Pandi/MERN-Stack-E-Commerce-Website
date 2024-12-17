import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Common/RoutesAndProviders/routes";
import AppProvider from "./components/Common/RoutesAndProviders/providers";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
