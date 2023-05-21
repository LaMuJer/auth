
import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser } from "../utils/firebase.util";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    // signOutUser()

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)

            console.log(user)
        })
        return unsubscribe
    }, [])

    console.log(currentUser)

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}


