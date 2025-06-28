function getStyledButton(styleType){
    if(styleType === 'primary'){
        return "bg-blue-500";
    }else if(styleType === "secondary"){
        return "bg-gary-500";
    }else if(styleType === "error"){
        return"bg-red-500";
    }else if(styleType==="succes"){
        return "bg-green-500";
    }else if(styleType === "warning"){
        return "bg-yellow-500";
    }
}

export default getStyledButton;