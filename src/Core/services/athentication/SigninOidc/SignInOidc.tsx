import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "src/Core/services/athentication/athentication.servic";
import { setItem } from "src/Core/services/commen/storage/storage.service";
import { AiOutlineLoading } from "react-icons/ai";
import { useUserAuth } from "src/Core/Context/AuthenticationContext";
import jwt_decode from "jwt-decode";

export interface ITokenDecodeType {
  Username: string;
  name: string;
  family_name: string;
  UserInfoId: string;
  auth_time: number;
  UserType: string;
}

const SigninOidc: React.FC = () => {
  const navigate = useNavigate();
  const {setUserInfoState,setTokenState} = useUserAuth();

  useEffect(() => {
    async function signinAsync() {
      try {
        const result = await auth.loginCallback();
        // console.log("result", result);
        const exp = new Date(result.expires_at * 1000);

        setItem("refresh_token", result.refresh_token);
        setItem("token", result.access_token);

        const decodedToken: ITokenDecodeType = jwt_decode(result.access_token);
        // storage
        auth.setLoggedUserInfoToStorage({
          Username: decodedToken.Username,
          name: decodedToken.name,
          family_name: decodedToken.family_name,
          UserInfoId: decodedToken.UserInfoId,
          auth_time: decodedToken.auth_time,
          UserType: decodedToken.UserType,
        });

        // context
        setTokenState(result.access_token);
        setUserInfoState((prev: any) => {
          return {
            ...prev,
            Username: decodedToken.Username,
            name: decodedToken.name,
            UserType: decodedToken.UserType,
            family_name: decodedToken.family_name,
            UserInfoId: decodedToken.UserInfoId,
            auth_time: decodedToken.auth_time,
          };
        });

        navigate("/");
      } catch (error) {}
    }
    signinAsync();
  }, [navigate]);
  return <AiOutlineLoading />;
};

export default SigninOidc;
