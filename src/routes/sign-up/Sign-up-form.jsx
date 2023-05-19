import { useState } from "react"

const SignUpForm = () => {

    const defaultFormfields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formField, setFormField] = useState(defaultFormfields)
    const { displayName, email, password, confirmPassword } = formField

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormField({ ...formField, [name]: value })

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('first')

        if (password !== confirmPassword) {
            alert("Your Password does not match")
            return
        };

        try {
            const response = await createAuthusersWithEmailandPassword(email, password)
            console.log(response)
        } catch (error) {

        }


    }

    return (
        <>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={() => { }}>
                <label htmlFor="Display Name">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label htmlFor="Email">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label htmlFor="Password">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label htmlFor="Confirm Password">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit" onSubmit={handleSubmit}>Sign Up</button>

            </form>
        </>
    )
}

export default SignUpForm
