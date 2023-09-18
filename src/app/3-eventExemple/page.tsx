"use client"; 
import React from 'react'

const page = () => {
  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{   
 //. It specifies that the function expects an event object e of type React.MouseEvent<HTMLButtonElement>,
  // which means it's designed to handle click events on HTML button elements.
    e.preventDefault();
    console.log("cliked")
  }
  const handelChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    // It specifies that the function expects an event object e of type React.ChangeEvent<HTMLInputElement>,
    //  which means it's designed to handle change events on HTML input elements of type input
    console.log(e.target.value);
  }
  const handelDelete=(e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
    e.preventDefault();
    console.log(`the post that id ${id} is deleted`)
    //     mnin taykon 3andna parametre tatkon e katsifet m3aha fprametre => <button onClick={(e)=>{handelDelete(e,2)}}>Delete</button> 

  }
  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handelChange}  
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e)=>{handelDelete(e,1)}}>Delete</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e)=>{handelDelete(e,2)}}>Delete</button> 
      </form>
    </div>
  )
}
export default page