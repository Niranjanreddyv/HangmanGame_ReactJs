import getStyledButton from "./getStyledButton";

function Button({styleType="primary", text ,onClickHandler, type = "button"}){
    return (
        <button
            onClick = {onClickHandler}
            type={type}
            className={`px-2 py-1  my-1  text-white ${getStyledButton(styleType)} border rounded-md hover:bg-green-500`}
        >{text}</button>
    )
}

export default Button;