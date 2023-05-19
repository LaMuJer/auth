import { useState } from "react"
import { createAuthUserWithEmail_Password } from "../../utils/firebase.util"

const SignUpForm = () => {

    const defaultFormfields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formfields, setFormfields] = useState(defaultFormfields)
    const { displayName, email, password, confirmPassword } = formfields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormfields({
            ...formfields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Yours Passwords do not match!")
            return
        }

        try {
            const { user } = await createAuthUserWithEmail_Password(email, password)
            await createAuthUserWithEmail_Password(user, { displayName })
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already exists!")
            }
            else {
                console.log("Server Error" + error.message)
            }
        }
    }

    return (
        <>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Display Name">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label htmlFor="Email">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label htmlFor="Password">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label htmlFor="Confirm Password">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit" >Sign Up</button>

            </form>
        </>
    )
}

export default SignUpForm
