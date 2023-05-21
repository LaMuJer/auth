import { useContext } from "react"
import "./cart-icon.style.scss"
import { CartContext } from "../../contexts/Cart.context"

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className="cart-icon-container " onClick={toggleIsCartOpen}>
            <span className="shopping-icon">🛒</span>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon
