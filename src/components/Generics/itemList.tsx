import React from 'react'
import Item from './item'

const itemList = () => {
  return (
    <div>
        <Item id={1} title='Post title' extra={[{id:1,name:'Raissi'}]}></Item>
    </div>
  )
}

export default itemList