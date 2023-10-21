'use client'
import React, { useState, useEffect } from 'react';

function page() {
  // useState: Managing State
  const [count, setCount] = useState(0);

  // useEffect: Performing Side Effects
  // useEffect is for performing side effects, such as interacting with the DOM, making API calls, and responding to changes in state or 
  // props. The second argument to useEffect controls when the effect is triggered based on changes in its dependencies.

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default page