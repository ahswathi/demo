import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Components/Users";
import Search from "./Components/Search";
import About from "./Components/About";
import UserDetails from "./Components/UserDetails";



let App = () => {

  const [users, setUsers] = useState([]);
  const [showclear, setshowclear] = useState(false);
  /* useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("https://api.github.com/users")
      setUsers(response.data)

    }
    fetchData();
  }, []); */

  const searchName = async (name) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${name}`)
    setUsers(response.data.items)
    setshowclear(true)
  }

  const clearUsers = () => {
    setUsers([])
  }
  return (
    <>
      <Router>
        <Navbar />
        <Search searchName={searchName} showclear={showclear} clearUsers={clearUsers} />
        <Users users={users} />
      </Router>

      {/* <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" 
        render={(props) => 
            <>
              <Search searchName={searchName} showclear={showclear} clearUsers={clearUsers} />
              <Users users={users} />
            </>
        }
        /> 
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/user/:login" element={<UserDetails/>} /> 
        </Routes>
    </Router> */}


    </>





  );
}

export default App;
