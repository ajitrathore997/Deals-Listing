import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


import Home from "../pages/Home";

import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },


  // {
  //   path: "/",
  //   element: (
  //     <ProtectedRoute>
  //       <Home />
  //     </ProtectedRoute>
  //   ),
  // },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
