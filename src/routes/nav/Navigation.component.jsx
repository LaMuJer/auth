import { Link, Outlet } from "react-router-dom"
import "./Navigation.scss"

import Logo from "../../assets/o2.svg"

const NavigationComponent = () => {
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
                    <Link className="nav-link" to={'/sign-in'}>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavigationComponent
