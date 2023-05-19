import { getRedirectResult } from "firebase/auth"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect, auth } from "../../utils/firebase.util"
import SignUpForm from "../sign-up/Sign-up-form";
import { useEffect } from "react";


const SingIn = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        console.log(response)
    }, [])

    const handleSignInUserWithPopUp = async () => {
        const { user } = await signInWithGooglePopup()

        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <>
            <h1>SingIn Page</h1>
            <button onClick={handleSignInUserWithPopUp}>SignIn with Google Pop Up</button>
            <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button>

            {/* <SignUpForm /> */}
        </>
    )
}

export default SingIn
