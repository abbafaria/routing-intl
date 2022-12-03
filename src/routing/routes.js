import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import { Blog } from "../pages/Blog";
import { ErrorPage } from "../pages/ErrorPage";

const routes = [
  {
    path: "/:langID",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <div>
            home
            <Outlet />
          </div>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: "about",
            element: <div> blog about</div>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <div>
            home
            <Outlet />
          </div>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: "about",
            element: <div> blog about</div>,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
