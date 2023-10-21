import React from 'react'
type ItemProps<T>={
    id:number,
    title:string,
    extra: T[]
}

const item = (props:ItemProps<object>) => {
  return (
    <div></div>
  )
}

export default item 