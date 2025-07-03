import React, { useState } from 'react'
import TextInputForm from './TextInputForm';
import { useNavigate } from 'react-router-dom';

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");
    const navigate = useNavigate(); // returns navigate function

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("From submited", value, hint);

        if(value){
            // if we have something valid we want to go to the play game page
            navigate("/play", {state : {wordSelected : value, hintWord : hint.toUpperCase()}});

        }

    }

    function handleTextInputChange(event){
        console.log("Input text changes");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleTextInputOfHintChages(event){
        console.log("Hint changes");
        console.log(event.target.value);
        setHint(event.target.value);

    }

    function handleShowHideClick(){
        console.log("show/hide button click")
        if(inputType === "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
        console.log(inputType);
    }
  return (
    <TextInputForm 
        inputType={inputType}
        handleFormSubmit = {handleFormSubmit}
        handleTextInputChange = {handleTextInputChange}
        handleShowHideClick = {handleShowHideClick}
        handleTextInputOfHintChages = {handleTextInputOfHintChages}

    />
   
  )
}

export default TextInputFormContainer