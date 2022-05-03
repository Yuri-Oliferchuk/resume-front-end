import { authAPI } from "../api/api";
import Cookies from "universal-cookie";
import { Buffer } from "buffer";

const cookies = new Cookies();

export const compareTokens = async () => {
    //get tokens from cookies
    const refreshToken = cookies.get("MYREF");
    let accessToken = cookies.get("MYACC");

    //parsing tokens
    const parsedAccessToken = JSON.parse(Buffer.from(accessToken.split(".")[1], "base64").toString("ascii"));
    const parsedRefreshToken = JSON.parse(Buffer.from(refreshToken.split(".")[1], "base64").toString("ascii"));

    //calculate life cicle of tokens
    const now = Math.floor(Date.now() / 1000);

    //if refresh token expired - reset all token
    if (parsedRefreshToken.exp - now < 2) {
      cookies.remove("MYACC");
      cookies.remove("MYREF");
      cookies.remove("sid");
      return undefined;
    }

    //if access token expired get new access token
    if (parsedAccessToken.exp - now < 2) {
      const newAccessToken = await authAPI.getNewToken(refreshToken);
      cookies.set("MYACC", newAccessToken.data.accessToken, { path: "/" });
      accessToken = newAccessToken.data.accessToken;
      return accessToken;
    }
    return accessToken;
  };