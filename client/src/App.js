/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import Chat from "./pages/Chat.js";
import Login from "./components/authentication/Login.js";
import Register from "./components/authentication/Register.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
