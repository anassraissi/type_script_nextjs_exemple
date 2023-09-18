import Child from '@/components/childrenParent/Child'
import Parent from '@/components/childrenParent/Parent'
import SecondeChild from '@/components/childrenParent/SecondeChild'
import React from 'react'
const page = () => {
  return (
    <div>
      <Parent>
        <Child></Child>
        <SecondeChild></SecondeChild>
      </Parent>
    </div>
  )
}

export default page