import {
  UserManagerSettings,
  UserManager,
  WebStorageStateStore,
} from "oidc-client-ts";
import { renewAccessToken } from "./helper";

let config: UserManagerSettings = {
  authority: "",
  client_id: "",
  redirect_uri: "",
}


if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // console.log("process",process)

  config = {
    // the URL of our identity server
    authority: "https://sso.dev.agroom.org/",
    // this ID maps to the client ID in the identity client configuration
    client_id: "localhost:6001",
    // URL to redirect to after login
    redirect_uri: "https://localhost:6001/signin-oidc",
    response_type: "code",
    // the scopes or resources we would like access to
    scope: "openid profile api1 role offline_access",
    // URL to redirect to after logout
    post_logout_redirect_uri: "https://localhost:6001/Register/",
    //silent_redirect_uri: window.location.pathname,
    //automaticSilentRenew: true,
    userStore: new WebStorageStateStore({ store: localStorage }),
  };
} else {
  config = {
    // the URL of our identity server
    authority: "https://sso.dev.agroom.org/",
    // this ID maps to the client ID in the identity client configuration
    client_id: "dev.agroom.org",
    // URL to redirect to after login
    redirect_uri: "https://dev.agroom.org/signin-oidc",
    response_type: "code",
    // the scopes or resources we would like access to
    scope: "openid profile api1 role offline_access",
    // URL to redirect to after logout
    post_logout_redirect_uri: "https://dev.agroom.org/Register/",
    //silent_redirect_uri: window.location.pathname,
    //automaticSilentRenew: true,
    userStore: new WebStorageStateStore({ store: localStorage }),
  };
}


const userManager = new UserManager(config);

userManager.events.addAccessTokenExpiring(async function () {
  console.log("Access token expiring...");
  await renewAccessToken();
});

// initialise!
export { userManager };
