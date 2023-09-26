"use client";
//useState => Purpose: useState is used for managing state within functional components. 
// It allows you to create and manage state variables.

// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// useRef Purpose: useEffect is used for managing side effects in functional components. 
// It allows you to perform actions like data fetching, DOM manipulation, and cleanup operations when the component mounts, updates,
//  or unmounts.

// import React, { useEffect } from 'react';

// const page = () => {
//   useEffect(() => {
//     // Code to run when the component mounts or updates
//     console.log('Component did mount or update');
    
//     // Return a cleanup function (optional)
//     return () => {
//       // Code to run when the component unmounts or before it re-renders
//       console.log('Component will unmount or update');
//     };
//   }, []);
//   return (
// <div>Example Component</div>
//   )
// }

// export default page

//useRef => Purpose: useRef is used for creating mutable references to DOM elements or for storing values that persist between 
// renders without causing re-renders.

import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
// or

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(`Count: ${countRef.current}`);
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


