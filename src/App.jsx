import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@routes/routes";

const App = () => {

  const Router = createBrowserRouter(routes);

  return (
    <RouterProvider router={Router} />
  );
};

export default App;