import React, { useState } from "react";
import { StatusDiv } from "./statusStyles";
import SearchUser from "../searchUser/SearchUser";
import NewUser from "../newUser/NewUser";


const Status = () => {
  const [isSearchDiv,setIsSearchDiv] = useState(false);
  
  const handleToggle=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setIsSearchDiv(e.target.value==="searchUser");
  }

  return (
    <StatusDiv>
        <input type="radio" id="newUser" name="component" onChange={handleToggle} value="newUser" />
        <label htmlFor="newUser">New User</label>
        <input type="radio" id="searchUser" name="component" onChange={handleToggle} value="searchUser" />
        <label htmlFor="searchUser">Search User</label><br />  
        {isSearchDiv?<SearchUser/>:<NewUser/>}
    </StatusDiv>
  );
};

export default Status;
