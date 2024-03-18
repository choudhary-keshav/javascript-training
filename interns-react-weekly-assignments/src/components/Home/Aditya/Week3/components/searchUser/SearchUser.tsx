import React, { useState } from 'react';
import { SearchUserDiv } from './searchUserStyles';
import useSearch from '../../hooks/useSearch';

interface User {
  name: string;
  status: string;
}

const SearchUser = () => {
  const [search, setSearch] = useState('');
  const results: User[] = useSearch(search);

  const statusChoices = ['Busy', 'Active', 'Do not disturb', 'Idle'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatusChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const users = JSON.parse(localStorage.getItem("users")??"[]");
    const updatedUsers = users.map((user:User)=>user.name===e.target.name?{
        name:e.target.name,
        status:e.target.value
    }:user);
    localStorage.setItem("users",JSON.stringify(updatedUsers));
  }

  return (
    <SearchUserDiv>
      <div id='container'>
        <h1>Search:</h1>
        <label htmlFor='search'>Search: </label>
        <input type='text' name='search' value={search} onChange={handleSearch} />
        <p>{results.length===0 ?"No results":"Results:"}</p>
        {results.map((user) => (
          <div className='results' key={user.name}>
            <span>{user.name}</span>
            <select id='userStatus' name={user.name} onChange={handleStatusChange}>
              {statusChoices.map((choice) => (
                <option key={choice} value={choice} selected={choice === user.status}>
                  {choice}
                </option>
              ))}
            </select>
          </div>
        ))}
        
      </div>
    </SearchUserDiv>
  );
};

export default SearchUser;
