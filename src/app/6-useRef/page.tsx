"use client";
import React, { useEffect, useRef } from 'react' 


// useRef: Used for accessing and interacting with DOM elements directly, as well as for storing mutable values that won't trigger 
// re-renders. It allows you to keep a reference to a DOM element or other values that persist across renders.
 
// Use useRef to access the DOM element directly


const useRefExample = () => {
const inputRef=useRef<HTMLInputElement>(null)
const usernameInputRef=useRef<HTMLInputElement>(null)
useEffect(()=>{
    inputRef.current?.focus();
},[])
const handleClick=()=>{
    console.log('username is :  '+ usernameInputRef.current?.value)
    
    if (usernameInputRef.current) {
      usernameInputRef.current.value = '';
    }}

  return (
    <div className='useRefExample'>
                <input ref={inputRef} type="text" placeholder='Focus here ...' />  
                <input ref={usernameInputRef} type="text" name="" id="" placeholder='username' />
                <button onClick={handleClick}>send</button>
    </div>
  )
}

export default useRefExample

