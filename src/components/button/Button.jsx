import "./button.style.scss"
// Three types of buttons
const Button_Types = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({ children, buttonType, ...otherprops }) => {

    return (
        <button className={`button-container ${Button_Types[buttonType]}  `}
            {...otherprops}
        >
            {children}
        </button>
    )
}

export default Button
