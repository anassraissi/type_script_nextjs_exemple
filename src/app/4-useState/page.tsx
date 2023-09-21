"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  // OR
  // const [user, setUser] = useState<UserType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    // handleChange function in TypeScript that takes an event of type React.ChangeEvent<HTMLInputElement>.
    //  This is a common pattern in React for handling changes in input elements.
    //   The React.ChangeEvent interface represents the event object for input change events in React,
    //  and <HTMLInputElement> specifies that the event target is an input element.
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //handleClick function in TypeScript that takes a React.MouseEvent<HTMLButtonElement> event.
    //  This function is typically used for handling clicks on a button element in a React application.
    e.preventDefault();
    const usernameInput = document.getElementById('Username') as HTMLInputElement;
    (usernameInput.value=="")?
        alert("fill the field username")
    :
        setUser({
          name: username,
          sessionId: Math.random(),
        });
    
  };
  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="Username" id="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {/* BE AWARE */}
      {/* {user?.name} */}
    </div>
  );
};

export default UseStateExample;