import React from 'react'

const Parent = ({children}:{children:React.ReactNode}) => {
  //The React.ReactNode type is a special type in React that is used to represent any content that can be rendered in a React component,
  //  such as JSX elements, strings, numbers, or other valid JSX content.
  return (
    <div>
        This is parent page
        {children}
    </div>
  )
}

export default Parent