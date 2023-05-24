import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Configs/RoutConfig/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";
import Loading from "./Ui/Components/Common/Loading/Loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { AuthenticationContext } from 'src/Core/Context/AuthenticationContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense
    fallback={
      <h3>
        <Loading />
      </h3>
    }
  >
    <AuthenticationContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </AuthenticationContext>
  </Suspense>
);
