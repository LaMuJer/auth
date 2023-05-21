import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if contains
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // if found , icrease quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        })
    }

    // return a new array with modified cartItems / new cart item
    return [...cartItems, {
        ...productToAdd, quantity: 1
    }]
}

export const CartContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => null,
    cartItems: [],
    addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        console.log(cartItems)
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart }



    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}