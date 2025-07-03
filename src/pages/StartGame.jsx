import React from 'react'
import { Link } from 'react-router-dom'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'

function StartGame() {
  return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-[70%] max-w-md bg-white border border-black-300 rounded-md shadow-md p-6 space-y-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Start Game</h2>

          <TextInputFormContainer />

          {/* <Link to="/play" className="text-blue-500 hover:underline">
            Play Game Link
          </Link> */}

          
        </div>
      </div>
      
    </>

  )
}

export default StartGame
