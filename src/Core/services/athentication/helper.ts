import {
    logout,
    setAccessToken,
    setRefreshToken,
    silentLogin,
  } from "../athentication/athentication.servic";
  import { setItem } from "src/Core/services/commen/storage/storage.service";
  
  export const renewAccessToken = async () => {
    try {
      const result = await silentLogin();
    //   console.log("result",result)
  
      const accessToken = result.access_token;
      // console.log("accessToken",accessToken)
      const refreshToken = result.refresh_token;
      setItem("expiry", result.expires_at * 1000);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      // If the item is expired, delete the item from storage
      // and return null
  
      return accessToken;
    } catch (error) {
      if (!navigator.onLine) {
        console.log(error);
      } else {
        localStorage.clear();
        logout();
      }
  
      return false;
    }
  };
  