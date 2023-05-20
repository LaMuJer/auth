import { useEffect, useState } from "react"
import "./sign-in-form.scss"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"
import { getRedirectResult, signInWithPopup } from "firebase/auth"
import { createUserDocumentFromAuth, auth } from "../../utils/firebase.util"

const SignInForm = () => {

    const defaultFormfields = {
        email: "",
        password: "",
    }

    const [formfields, setFormfields] = useState(defaultFormfields)
    const { email, password } = formfields

    const resetFormfields = () => {
        setFormfields(defaultFormfields)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth)
            console.log(response)
        }
        fetchData()
    }, [])

    const handleSignInUserWithPopUp = async () => {
        const { user } = await signInWithPopup()
        console.log(user)
        // const userDocRef = await createUserDocumentFromAuth(user)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormfields({
            ...formfields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {

            resetFormfields()

        } catch (error) {

        }
    }

    return (
        <div className="sign-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label={"Email"}
                    type="text" required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label={"Password"}
                    type="password" required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <Button type="submit">Sign In</Button>
                <Button onClick={handleSignInUserWithPopUp} >Sign In with Google</Button>

            </form>
        </div>
    )
}

export default SignInForm
