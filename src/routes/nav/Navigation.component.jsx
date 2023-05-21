import { Link, Outlet } from "react-router-dom"
import "./Navigation.scss"

import Logo from "../../assets/o2.svg"
import { useContext } from "react"

import { UserContext } from "../../contexts/User.contenxt"
import { signOutUser } from "../../utils/firebase.util"
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropDown from "../../components/cart-dropdown/CartDropDown"
import { CartContext } from "../../contexts/Cart.context"

const NavigationComponent = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    // console.log(currentUser)


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
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to={'/sign-in'}>
                            Sign In
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {
                    isCartOpen && <CartDropDown />
                }

            </div>
            <Outlet />
        </>
    )
}

export default NavigationComponent
