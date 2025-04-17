import React from 'react';
import { Outlet } from 'react-router-dom';

const PostLayout = () => {
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'15px',textDecoration:'underline'}}>Manage Your Posts</h2>
      <Outlet />
    </div>
  );
}

export default PostLayout;
