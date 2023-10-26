// ChatList.js
import React from 'react';

function ChatList({ chats, activeChat, onChatSelect }) {
  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div
          key={index}
          className={`chat ${chat === activeChat ? 'active' : ''}`}
          onClick={() => onChatSelect(chat)}
        >
          <img src={chat.user.profileImage} alt={`${chat.user.username}'s avatar`} />
          <div className="chat-info">
            <h3>{chat.user.username}</h3>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
