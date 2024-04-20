import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartContextProvider } from "@common/contexts/CartContext";
import routes from "@routes/routes";

const App = () => {

  const Router = createBrowserRouter(routes);

  return (
    <CartContextProvider>
      <RouterProvider router={Router} />
    </CartContextProvider>
  );
};

export default App;