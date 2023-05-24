import React, { useContext, useEffect, useState } from "react";
// import { getUserClaims } from "src/Core/services/athentication/athentication.servic";
import {
  clearStorage,
  getItem,
} from "src/Core/services/commen/storage/storage.service";

import { AiOutlineLoading } from "react-icons/ai";
import { ITokenDecodeType } from "../services/athentication/SigninOidc/SignInOidc";
import jwt_decode from "jwt-decode";

export interface IUserInfo {
  Username: string;
  name?: string;
  family_name?: string;
  UserInfoId?: string;
  auth_time: number;
  UserType: string;
}

// interface IUserClaim {
//   value: string;
//   type: string;
// }

export interface IAuthInfo {
  token: string;
  userInfo: IUserInfo;
  setUserInfoState: React.Dispatch<React.SetStateAction<IUserInfo>>;
  setTokenState: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: () => boolean;
  resetAuthContext: () => void;
  logOut: () => void;
}

type childrenProps = {
  children: React.ReactNode;
};

export const authContext = React.createContext<IAuthInfo | null>(null);

export const initialUserInfoState: IUserInfo = {
  Username: "",
  name: "",
  family_name: "",
  UserInfoId: "",
  UserType: "",
  auth_time: 0,
};

const useUserAuth = () => {
  const pc = useContext(authContext);
  // console.log("pcvalue", pc);
  if (pc === null) {
    throw new Error("usePermissions Must be inside of Provider");
  }
  return pc;
};

// default initial from local-storage
const token: any =
  getItem("token") && getItem("token") !== "undefined" ? getItem("token") : "";

// const userClaim: any = getUserClaims() ? getUserClaims() : [];

const AuthenticationContext = ({ children }: childrenProps) => {
  // console.log("children" ,children)

  const [userInfoState, setUserInfoState] = useState<IUserInfo>({
    Username: "",
    name: "",
    family_name: "",
    UserInfoId: "",
    UserType: "",
    auth_time: 0,
  });
  const [tokenState, setTokenState] = useState<string>(token);
  // const [userClaimState, setUserClaimState] = useState<IUserClaim[]>(userClaim);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const logOut = () => {
    clearStorage();
    setUserInfoState({
      Username: "",
      name: "",
      family_name: "",
      UserInfoId: "",
      UserType: "",
      auth_time: 0,
    });
    setTokenState("");
    // setUserClaimState([]);
    window.location.pathname = "/";
  };

  const getData = async () => {
    try {
      if (tokenState) {
        const decode_token: ITokenDecodeType = jwt_decode(tokenState);

        setUserInfoState({
          Username: decode_token.Username,
          name: decode_token.name,
          UserType: decode_token.UserType,
          family_name: decode_token.family_name,
          UserInfoId: decode_token.UserInfoId,
          auth_time: decode_token.auth_time,
        });
      }

      setIsLoading(false);
    } catch (error) {
      console.log("error-context", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const isAuthenticated = () => {
    if (!userInfoState.UserType || !userInfoState.UserInfoId) {
      return false;
    }
    if (token) {
      return true;
    }

    return false;
  };

  const resetAuthContext = () => {
    setUserInfoState(initialUserInfoState);
    setTokenState("");
  };

  return (
    <authContext.Provider
      value={{
        token: tokenState,
        userInfo: userInfoState,
        setUserInfoState,
        setTokenState,
        isAuthenticated,
        resetAuthContext,
        logOut,
      }}
    >
      {isLoading ? <AiOutlineLoading /> : children}
    </authContext.Provider>
  );
};

export { AuthenticationContext, useUserAuth };

// userClaim: userClaimState,
// setUserClaimState,
