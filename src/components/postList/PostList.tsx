import React from 'react'
import PostCard from '../postCard/PostCard'
import { postProps } from '@/types/Types'

const get_data=async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    if(!data.ok){
      throw new Error("Failed to fetch data")
    }
    return data.json();

}

// const PostList = async () => {
//   const data: postProps[]=await get_data();
//   return (
//     <div className='postList'>
//       {data.map((post)=>(
//           <PostCard key={post.id {...post}}/>
//       ))}
//     </div>
//   );
// }
// export default PostList

const PostList = async() => {
  const data:postProps[]=await get_data();
  return (
    <div>
        {data.map((post)=>(   // or    {data.map((post :{id:number,body:string, title:string})=>( 
          <PostCard key={post.id} {...post}/>
      ))}
    </div>
  )
}

export default PostList