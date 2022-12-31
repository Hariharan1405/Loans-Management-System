import "./App.css";
import LoginForm from "./Components/LoginForm";
import React, { useState } from "react";
import AddLoan from "./Components/AddLoan";
import { Route, Routes } from "react-router-dom";
import Search from "./Components/Search";
import { NavBar } from "./Components/NavBar";

function App() {
  const Admin = {
    email: "admin@admin.com",
    password: "1234",
  };
  
  const [user, setUser] = useState({email: "" });
  const [error, setError] = useState("");

  let timer = setTimeout(() => setError(""), 1000);
  function Login(details) {
    if (
      details.email === Admin.email &&
      details.password === Admin.password 
      
    ) {
      setUser({ email: details.email });
    } 
    else {
      setError("Credientials are incorrect");
      clearTimeout(timer);
    }
  }

  function Logout(details) {
    setUser({ email: "" });
  }

  return (
    <div className="App">
     {user.email === Admin.email ? (
        <div className="welcome">
          {/* EDit here after full completion */}
          {/* <AddLoan /> */}
          <NavBar />
          <Routes>
              <Route path="/addloan" element={<AddLoan/>} />
              <Route path="/search" element={<Search />} />
          </Routes>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
           <LoginForm error={error} login={Login} />
           {/*  <AddLoan /> */}
        </div>
      )}
    </div>
  );
}

export default App;