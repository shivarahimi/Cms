import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../../Ui/Layout/Layout";

// cms
const Home = lazy(() => import("../../Ui/Screens/Home"));
const UserRegistration = lazy(
  () => import("../../Ui/Screens/UserRegisteration")
);
const NewsList = lazy(() => import("../../Ui/Screens/NewsList"));
const NewsPage = lazy(() => import("../../Ui/Screens/NewsPage"));

// sso
const Login = lazy(() => import("../../Ui/Screens/Authorization/Login/Login"));
const SignInOidc = lazy(
  () => import("../../Core/services/athentication/SigninOidc/SignInOidc")
);
const SignOutOidc = lazy(
  () => import("../../Ui/Components/SignoutOidc/SignOutOidc")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3 className="text-center"> صفحه ای یافت نشد ...</h3>,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "userregistration",
        element: <UserRegistration />,
      },
      {
        path: "/news/textnews",
        element: <NewsList />,
      },

      {
        path: "news/textnew/:textId",
        element: <NewsPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin-oidc/*",
    element: <SignInOidc />,
  },
  {
    path: "/signout-oidc",
    element: <SignOutOidc />,
  },
]);
