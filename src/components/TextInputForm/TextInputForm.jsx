import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Buttons/Button'

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange,handleShowHideClick,handleTextInputOfHintChages}) {


  return (
    <form onSubmit = {handleFormSubmit}>
        <div>
            <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder='Enter a word or phrase here ....'
                onChangeHandler={handleTextInputChange}
            />
            <TextInput
                type="text"
                label="Hint"
                placeholder='Enter a Hint'
                onChangeHandler={handleTextInputOfHintChages}
            />
        </div>
        <div>
            <Button
                styleType='primary'
                text = {inputType === "password" ? "show" : "Hide"}
                onClickHandler={handleShowHideClick}
            />
        </div>
        <div>
            <Button
                styleType='error'
                text = "Submit"
                type = "submit"
            />
        </div>
    </form>
  )
}

export default TextInputForm