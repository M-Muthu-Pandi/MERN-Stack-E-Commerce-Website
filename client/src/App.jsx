import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Common/RoutesAndProviders/routes";
import AppProvider from "./components/Common/RoutesAndProviders/providers";

const App = () => {
  return (
    // Wrapping the entire app with AppProvider to provide context to the app
    <AppProvider>
      <BrowserRouter>
        {/* Rendering the defined routes inside AppRoutes */}
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
