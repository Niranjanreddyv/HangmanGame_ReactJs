import React from 'react'
import { Link } from 'react-router-dom'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'

function StartGame() {
  return (
    <>
      <div>StartGame</div>
      <TextInputFormContainer />
      <Link to = "/play" className='text-blue-400'>Play game Link</Link>
    </>

  )
}

export default StartGame
