import React, { useState } from 'react';

function PostForm({ onAddPost }) {
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState(null);
  
    const handlePostSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        id: Math.random().toString(36).substr(2, 9),
        content: postContent,
        image: postImage,
      };
      onAddPost(newPost); // Pass the new post to the parent component
      setPostContent(''); // Clear the text input
      setPostImage(null); // Clear the image input
    };
  
    const handleImageChange = (e) => {
      const imageFile = e.target.files[0];
      setPostImage(imageFile); // Capture the selected image
    };
  
    return (
      <form onSubmit={handlePostSubmit} className="mb-4">
        <textarea
          rows="3"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full p-3 border rounded text-black bg-white"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2"
        />
        {postImage && (
          <img
            src={URL.createObjectURL(postImage)}
            alt="Selected Image"
            className="mt-2 max-h-36"
          />
        )}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
          Post
        </button>
      </form>
    );
  }
  export default PostForm;  