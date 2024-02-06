import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsLoginState, memberIdState } from "../store/atom";


import axios from "axios";


const clientId = process.env.REACT_APP_CLIENT_ID;
export default function GoogleButton() {

  const setLogin = useSetRecoilState(IsLoginState);
  const setMemberId = useSetRecoilState(memberIdState);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    const decodedToken = jwtDecode(credentialResponse.credential);

    console.log("확인",decodedToken);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/user/create`,
        {
          userEmail: decodedToken.email,
          userName: decodedToken.name,
          userImage: decodedToken.picture,
        }
      );
      if (response.status === 200) {
        console.log("확인");

        const uesrId = response.data; // memberId 받아오기
        setMemberId(uesrId);
        setLogin(true);
        history.push("/login");
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(error)}
        useOneTap
      />
    </>
  );
}
