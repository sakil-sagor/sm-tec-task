import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/teachers",
      //     element: <Teachers></Teachers>,
      //     loader: async () => {
      //       return fetch("teachers.json");
      //     },
      //   },

      //   {
      //     path: "/contactus",
      //     element: <ContactUs></ContactUs>,
      //   },
      //   {
      //     path: "/login",
      //     element: <Registration></Registration>,
      //   },
    ],
  },
]);

export default router;
