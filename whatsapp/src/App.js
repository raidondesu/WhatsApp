import React from "react";
import "./App.css";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";

function App() {
  return (
    <div className="app">
      <h2>Lets build whatsapp</h2>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
