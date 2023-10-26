import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import HomeScreen from "./components/HomeScreen";
import ChatSection from "./components/ChatList";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomeScreen />} />.
        <Route path="/chat" element={<ChatSection />} />

      

      </Routes>
    </>
  );
}

export default App;
