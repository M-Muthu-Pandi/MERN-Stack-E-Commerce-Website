import { ProductProvider } from "../../ECommerceFeatures/common/Context/ProductsContext";
import { CartProvider } from "../../ECommerceFeatures/common/Context/CartContext";
import { AdminProvider } from "../../ECommerceFeatures/common/Context/AdminContext";

const AppProviders = ({ children }) => (
  <AdminProvider>
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  </AdminProvider>
);

export default AppProviders;
