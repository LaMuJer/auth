import { getRedirectResult } from "firebase/auth"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect, auth } from "../../utils/firebase.util"
import SignUpForm from "../../components/sign-up-form/Sign-up-form";
import { useEffect, useState } from "react";
import SignInForm from "../../components/sign-in/Sign-in-form";

// import "."

const Authentication = () => {

    return (
        <div className="sign-container">
            <h1>SingIn Page</h1>

            <SignInForm />

            {/* <button onClick={handleSignInUserWithPopUp}>SignIn with Google Pop Up</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}

            <SignUpForm />
        </div>
    )
}

export default Authentication
