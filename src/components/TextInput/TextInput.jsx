import React from 'react'

function TextInput({type = "text", label, placeholder = "Enter your input here", onChangeHandler}) {
  return (
    <label >
        <h1 className="text-xl font-semibold">
            <span className="text-indigo-600">{label}</span>
        </h1>
        

        <input 
            type={type}
            className='px-4 py-2 border border-gray-500 rounded-md w-full'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </label>
  )
}

export default TextInput