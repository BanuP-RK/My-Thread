import React from 'react';
import Post from './Post'

const Post2 = ({posts}) => {
  return (
    <div className='homepost'>
    {posts.map((post)=> (
        <Post key={post.id} post={post} />

      ))}
    </div>
  )
}

export default Post2