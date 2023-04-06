import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Books from "./components/Books/Books";
import BookDetails from "./components/BookDetails/BookDetails";
import Error from "./components/Error/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: ()=> fetch('https://api.itbook.store/1.0/new'),
      },

      {
        path: "/book/:id",
        element:<BookDetails/> ,       
        loader: ({params}) =>fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
