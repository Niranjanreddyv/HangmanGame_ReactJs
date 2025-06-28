import getStyledButton from "./getStyledButton";

function Button({styleType='primary', text}){
    return (
        <button
            className={`px-2 py-1 ${getStyledButton(styleType)} border rounded-md hover:bg-green-500`}
        >{text}</button>
    )
}

export default Button;