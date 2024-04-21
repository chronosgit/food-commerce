import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "@modules/cart/Cart";
import Container from "@common/components/container/Container";
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
    <Container maxWidth="50rem">
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
    </Container>
  );
};

export default App;