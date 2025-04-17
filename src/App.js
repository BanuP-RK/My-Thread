import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostPage from './Components/PostPage';
import Home from './Components/Home';
import About from './Components/About';
import NewPost from './Components/NewPost';
import PostLayout from './Components/PostLayout';
import { format } from 'date-fns';
import Missing from './Components/Missing';

const App = () => {
  const navigate = useNavigate();
  const [search, setsearch] = useState('');
  // const [posts, setposts] = useState([
  //   { id: 1, title: 'MY FIRST VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my first video' },
  //   { id: 2, title: 'MY second VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my secnd video' },
  //   { id: 3, title: 'MY third VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my third video' }
  // ]);
  const [posts, setposts] = useState(() => {
    const storedPosts = localStorage.getItem('my-thread-posts');
    return storedPosts ? JSON.parse(storedPosts) : [
      { id: 1, title: 'MY FIRST VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my first video' },
      { id: 2, title: 'MY second VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my secnd video' },
      { id: 3, title: 'MY third VIDEO', dateandtime: 'June 01,2021,11:12:32 AM', body: 'this is my third video' }
    ];
  });
  useEffect(() => {
    localStorage.setItem('my-thread-posts', JSON.stringify(posts));
  }, [posts]);
  
  const [searchresults, setsearchresult] = useState([]);
  const [posttitle, setposttitle] = useState('');
  const [postbody, setpostbody] = useState('');
  
  const [editingPostId, setEditingPostId] = useState(null); // For tracking which post is being edited

  // Handle submit for new post
  const handleSubmit = (e, postImage) => { 
    e.preventDefault(); 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1; 
    const dateandtime = format(new Date(), "MMMM dd yyyy hh:mm a"); 
    const newPost = { 
      id, 
      title: posttitle, 
      dateandtime, 
      body: postbody,
      image: postImage // Store the image URL in the post object
    }; 
    setposts([...posts, newPost]); 
    setposttitle(""); // Reset title after post submission
    setpostbody(""); // Reset body after post submission
    
    
    navigate("/"); // Redirect to the homepage
  };

  // Handle delete
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setposts(postList);
    navigate('/'); // Navigate back to home after deletion
  };

  // Handle edit
  const handleEdit = (id, newTitle, newBody) => {
    const dateandtime = format(new Date(), "MMMM dd yyyy hh:mm a"); // Get current date and time
    const updatedPosts = posts.map(post =>
      post.id === id
        ? { ...post, title: newTitle, body: newBody, dateandtime }  // Update dateandtime along with title and body
        : post
    );
    setposts(updatedPosts);
    setEditingPostId(null); // Reset edit mode
    navigate('/'); // Redirect to home after editing
  };

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setsearchresult(filteredResults.reverse());
  }, [posts, search]);

  return (
    <div>
      <Header title="MY-Thread" />
      <Nav search={search} setsearch={setsearch} />
      <Routes>
        <Route path="/" element={<Home searchresults={searchresults} />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<PostLayout />}>
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={posttitle}
                setPostTitle={setposttitle}
                postBody={postbody}
                setPostBody={setpostbody}
              />
            }
          />
          <Route
            path=":id"
            element={
              <PostPage
                posts={posts}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editingPostId={editingPostId}
                setEditingPostId={setEditingPostId}
              />
            }
          />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;
