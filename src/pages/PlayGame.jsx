import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import HangMan from '../components/HangMan/HangMan';

function PlayGame() {

  const {state} = useLocation();
  // console.log(state);

  const [guessedLetters, setGussedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter){
    if(state.wordSelected.toUpperCase().includes(letter)){
      console.log("correct");
    }else{
      setStep(step+1);
      console.log("Wrong");
    }
    setGussedLetters([...guessedLetters, letter]);

  }

  return (
    <>
        <div>PlayGame {state.wordSelected}</div>

        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>

        <div>
          <LetterButtons text = {state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
        </div>
        <div>
          <HangMan step = {step} />
        </div>
        <Link to = "/start" className='text-blue-400'>Start game Link</Link>



    </>
    
  )
}

export default PlayGame