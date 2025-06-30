import React from 'react'
import { Link } from 'react-router-dom'

function PlayGame() {
  return (
    <>
        <div>PlayGame</div>
        <Link to = "/start" className='text-blue-400'>Start game Link</Link>

    </>
    
  )
}

export default PlayGame