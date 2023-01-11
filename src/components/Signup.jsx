import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Signup = () => {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  
  return (
    <div className=" flex justify-center">
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default Signup;
