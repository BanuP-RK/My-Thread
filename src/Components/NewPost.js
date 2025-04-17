import React, { useState,useRef } from 'react';

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  const [postImage, setPostImage] = useState(null); // To store the selected image file

  // useEffect(() => {
  //   const savedImage = localStorage.getItem("savedImage");
  //   if (savedImage) {
  //     setPostImage(savedImage);
  //   }
  // }, []);
  const fileInputRef = useRef(); // 👈
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("savedImage", base64String); // Save it
        setPostImage(base64String); // Set it
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, postImage); // Pass the image to handleSubmit
    setPostImage(null); // 🔥 Clear preview
    if (fileInputRef.current) fileInputRef.current.value = ''; // 🔄 Clear file input field
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-post-section'>
        <label>Title:</label>
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
      </div>
      <div className='new-post-section'>
        <label>Body:</label>
        <textarea
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
      </div>
      <div className='new-post-section'>
        <label style={{marginLeft:'100px'}}>Upload Image:</label>
        <input type="file" onChange={handleImageChange} className='uplod-section' />
        <button type="submit" className='button' style={{marginLeft:'100px',marginTop:'30px'}}>Submit Post</button>
      </div>
      {postImage && <img src={postImage} alt="Preview" style={{ maxWidth: '10%', marginTop: '10px' }} />}
      
    </form>
  );
};

export default NewPost;
