import "./button.style.scss"
// Three types of buttons
const Button_Types = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({ children, buttonType, ...otherprops }) => {

    return (
        <div className={`button-container ${Button_Types[buttonType]}  `}
            {...otherprops}
        >
            {children}
        </div>
    )
}

export default Button
