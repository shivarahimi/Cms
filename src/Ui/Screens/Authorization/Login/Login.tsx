import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { login } from "src/Core/services/athentication/athentication.servic";
import { ToastTypes, showToast } from "src/Core/utils/toast/show-toast";

const Login: any = () => {
  useEffect(() => {
    showToast(["در حال انتقال به صفحه ورود ..."], ToastTypes.success);
    login();
  }, []);

  return <AiOutlineLoading  />
};

export default Login;
