import React from 'react'

const Parent = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        This is parent page
        {children}
    </div>
  )
}

export default Parent