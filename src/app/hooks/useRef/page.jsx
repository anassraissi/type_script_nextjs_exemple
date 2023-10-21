'use client'
import React, { useState, useEffect, useRef } from 'react';

function InputFocus() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); // send null in mount(loadPage)

  useEffect(() => {
    // Focus the input element when the component mounts
    // inputRef.current.focus();
    document.getElementById('value_id').focus();
    
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id='value_id'
        ref={inputRef} // Use useRef to access the DOM element directly
        value={inputValue}
        onChange={handleChange}
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default InputFocus;
