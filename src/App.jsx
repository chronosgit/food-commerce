import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "@modules/cart/Cart";
import { CartContextProvider } from "@common/contexts/CartContext";
import useCart from "@common/hooks/useCart";
import routes from "@routes/routes";

const App = () => {

  const Router = createBrowserRouter(routes);

  const {isCartOpen, closeCart} = useCart();

  return (
    <CartContextProvider>
      <RouterProvider router={Router} />

      <Cart 
        isVisible={isCartOpen} 
        onClose={closeCart}
      />
    </CartContextProvider>
  );
};

export default App;