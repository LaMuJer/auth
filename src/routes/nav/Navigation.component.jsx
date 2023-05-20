import { Link, Outlet } from "react-router-dom"
import "./Navigation.scss"

import Logo from "../../assets/o2.svg"
import { useContext } from "react"

import { UserContext } from "../../contexts/User.contenxt"
import { signOutUser } from "../../utils/firebase.util"

const NavigationComponent = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    // console.log(currentUser)

    const signOuthandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <>
            <div className="navigation">
                <Link to={'/'} className="logo-container" >
                    <img src={Logo} alt="logo" style={{
                        width: "50px",
                        height: "50px"
                    }} />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOuthandler}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to={'/sign-in'}>
                            Sign In
                        </Link>
                    )}

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavigationComponent
