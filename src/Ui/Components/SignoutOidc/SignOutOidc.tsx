import { useEffect } from "react";
import { useUserAuth } from "src/Core/Context/AuthenticationContext";
import { logout } from "src/Core/services/athentication/athentication.servic";
import { clearStorage } from "src/Core/services/commen/storage/storage.service";
import { AiOutlineLoading } from "react-icons/ai";
const SignOutOidc=() => {
  const { resetAuthContext } = useUserAuth();

  useEffect(() => {
    logout();
    clearStorage();
    resetAuthContext();
  }, []);
  return <AiOutlineLoading />;
};

export default SignOutOidc ;
