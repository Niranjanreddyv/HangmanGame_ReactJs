import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function PlayGame() {

  const {state} = useLocation();
  console.log(state);

  return (
    <>
        <div>PlayGame {state.wordSelected}</div>
        <Link to = "/start" className='text-blue-400'>Start game Link</Link>

    </>
    
  )
}

export default PlayGame