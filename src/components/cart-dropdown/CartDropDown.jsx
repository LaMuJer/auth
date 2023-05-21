import "./cart-dropdown.style.scss"
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { useContext } from "react"
import { CartContext } from "../../contexts/Cart.context"

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className="cart-dropdown-container">
            <div className="card-items">
                {[].map((item) => <CartItem cartItem={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown
