import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "@modules/cart/Cart";
import { CartContextProvider } from "@common/contexts/CartContext";
import routes from "@routes/routes";

const App = () => {

  const Router = createBrowserRouter(routes);

  return (
    <CartContextProvider>
      <RouterProvider router={Router} />

      <Cart />
    </CartContextProvider>
  );
};

export default App;