import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "@modules/cart/Cart";
import Toaster from "@common/components/toaster/Toaster";
import { CartContextProvider } from "@common/contexts/CartContext";
import ToasterContext from "@common/contexts/ToasterContext";
import useToaster from "@common/hooks/useToaster";
import routes from "@routes/routes";

const App = () => {

  const Router = createBrowserRouter(routes);

  const {
		isActive, toasterText, callToaster,
	} = useToaster();

  const toasterCtx = {
    isActive, toasterText, callToaster,
  };

  return (
    <CartContextProvider>
      <ToasterContext.Provider value={toasterCtx}> 
        <Toaster
          text={toasterText}
          color="var(--color-white)"
          bgColor="var(--color-green)"
          isActive={isActive}
        />

        <RouterProvider router={Router} />

        <Cart />
      </ToasterContext.Provider>
    </CartContextProvider>
  );
};

export default App;