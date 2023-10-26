// HomeScreen.js
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import PostForm from './PostForm'; // Import the PostForm component

const dummyPosts = [
  {
    id: 1,
    username: 'user1',
    avatar: 'https://placekitten.com/100/100',
    content: 'This is a beautiful sunset! 🌇',
    likes: 25,
    comments: 12,
  },
  {
    id: 2,
    username: 'user2',
    avatar: 'https://placekitten.com/100/101',
    content: 'Enjoying a cup of coffee. ☕',
    likes: 33,
    comments: 7,
  },
  {
    id: 3,
    username: 'user3',
    avatar: 'https://placekitten.com/100/102',
    content: 'Exploring the great outdoors. 🏞️',
    likes: 55,
    comments: 18,
  },
  // Add more dummy posts as needed
];

function HomeScreen() {
  const [posts, setPosts] = useState(dummyPosts);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <NavigationBar />
        <div className="max-w-screen-lg mx-auto p-4">
          <h1 className="text-4xl font-semibold tracking-wide text-center mb-6">Your Feed</h1>
          <PostForm onAddPost={addPost} /> {/* Include the PostForm component */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white bg-opacity-20 p-6 my-6 shadow-md rounded-md">
              <div className="flex items-center mb-4">
                <img src={post.avatar} alt={`${post.username}'s profile`} className="w-14 h-14 rounded-full" />
                <span className="ml-4 font-semibold text-xl">{post.username}</span>
              </div>
              <p className="text-lg leading-7">{post.content}</p>
              <div className="mt-6 flex items-center">
                <button className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center ml-5 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Comment</span>
                </button>
              </div>
              <div className="mt-6 text-gray-500">
                <span className="font-semibold">Liked by UserA</span> and <span className="font-semibold">7 others</span>
              </div>
              <div className="mt-4 text-blue-600 font-semibold cursor-pointer">View all 12 comments</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
