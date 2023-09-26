"use client";
import React, { useEffect, useRef } from 'react'

const useRefExample = () => {
const inputRef=useRef<HTMLInputElement>(null)
const usernameInputRef=useRef<HTMLInputElement>(null)
useEffect(()=>{
    inputRef.current?.focus();
},[])
const handleClick=()=>{
    console.log('username is :  '+ usernameInputRef.current?.value)
}
  return (
    <div className='useRefExample'>
                <input ref={inputRef} type="text" placeholder='Focus here ...' />
                <input ref={usernameInputRef} type="text" name="" id="" placeholder='username' />
                <button onClick={handleClick}>send</button>
    </div>
  )
}

export default useRefExample

