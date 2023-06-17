import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IdentityFormContainer, WorkFormContainer } from "../containers";
import { Course } from "../components";

export const HOME_PAGE = "/";
export const WORK_PAGE = "/work";

const router = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <IdentityFormContainer />,
  },
  {
    path: WORK_PAGE,
    element: <WorkFormContainer />,
  },
]);

export const Router = () => (
  <Course>
    <RouterProvider router={router} />
  </Course>
);
