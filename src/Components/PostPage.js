import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete, handleEdit, editingPostId, setEditingPostId }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const [editTitle, setEditTitle] = useState(post?.title || '');
  const [editBody, setEditBody] = useState(post?.body || '');

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <h4>Well, that's disappointing.</h4>
      </div>
    );
  }

  const isEditing = editingPostId === post.id;

  const handleUpdate = () => {
    handleEdit(post.id, editTitle, editBody); // Pass the updated data
  };

  return (
    <div className='postPage'>
      <div className='post'>
        {isEditing ? (
          <>
            <input
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className='editInput'
            />
            <textarea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              className='editTextarea'
            />
            <button onClick={handleUpdate} className='update-button'>Update</button>
            <button onClick={() => setEditingPostId(null)} className='cancel-button'>Cancel</button>
          </>
        ) : (
          <>
            <h2>{post.title}</h2>
            <p className='postDatetime'>{post.dateandtime}</p>
            <p className='postBody'>{post.body}</p>
            {post.image && <img src={post.image} alt="Post" style={{ maxWidth: '10%' }} />}
            <button onClick={() => setEditingPostId(post.id)} className='button'>Edit Post</button>
            <button onClick={() => handleDelete(post.id)} className='button'>Delete Post</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostPage;
