import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/body/Body";
import HeaderApp from "./components/header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppContext from "./hooks/appContext";
import Cart from "./components/body/Cart";
import Contacto from "./components/body/Contacto";
import Nosotros from "./components/body/Nosotros";
//consume app context

function App() {
  const [itemsInCart, setItemsInCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [search, setSearch] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/products",
      element: <Body />,
    },
    {
      path: "/shopping-cart",
      element: <Cart />,
    },
  ]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ setItemsInCart, setSearch, itemsInCart, search }}
      >
        <RouterProvider router={router} />
        <HeaderApp />
      </AppContext.Provider>
    </div>
  );
}

export default App;
