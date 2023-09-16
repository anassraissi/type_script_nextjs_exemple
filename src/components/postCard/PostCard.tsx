import React from 'react'
import PostList from '../postList/PostList'
import { postProps } from '@/types/Types'

const PostCard = ({title,body}:postProps) => {
  return (
    <div className='postCard'>
      
      <h1>{title}</h1>
    <br />
      <p>{body}</p>
    </div> 
  )
}

export default PostCard