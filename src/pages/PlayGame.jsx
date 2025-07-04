import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import HangMan from '../components/HangMan/HangMan';

function PlayGame() {

  const {state} = useLocation();
  // console.log("state object" ,state);

  // console.log("state Word ", state.wordSelected, "hit word", state.hintWord);

  const [guessedLetters, setGussedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter){
    if(state?.wordSelected?.toUpperCase().includes(letter)){
      console.log("correct");
    }else{
      
      setStep(step+1); 
      console.log("Wrong");
    }
    setGussedLetters([...guessedLetters, letter]);

  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen bg-gray-100">
            {/* Game Area */}
            <div className="w-full max-w-md bg-white border border-gray-300 rounded-md shadow-md p-6 space-y-4 text-center mx-auto">
              <h2 className="text-xl font-semibold text-gray-700">
                PlayGame: <span className="text-indigo-600">{state?.hintWord}</span>
              </h2>

              {
                (state?.wordSelected) && (
                  <>
                      <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />

                      <div>
                        <LetterButtons
                          text={state.wordSelected}
                          guessedLetters={guessedLetters}
                          onLetterClick={handleLetterClick}
                        />
                      </div>
                  </>    
                )      
              }                
                
              

              
            </div>

            {/* Hangman Area */}
            <div className="w-full max-w-md bg-white border border-gray-300 rounded-md shadow-md p-6 space-y-4 text-center mx-auto">
              <HangMan step={step} />


              <Link to='/' className="inline-block mt-4 p-2 text-blue-600 hover:underline font-medium">
                Home
              </Link>
              <Link
                to="/start"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                Start Game Link
              </Link>
            </div>
        </div>


        
        
        



    </>
    
  )
}

export default PlayGame