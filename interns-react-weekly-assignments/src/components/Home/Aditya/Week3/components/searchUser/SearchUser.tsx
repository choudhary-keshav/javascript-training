import React, { useState } from 'react';
import { SearchUserDiv } from './searchUserStyles';
import useSearch from '../../hooks/useSearch';

interface User {
  name: string;
  status: string;
}

const SearchUser: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const results: User[] = useSearch(search);

  const statusChoices: string[] = ['Busy', 'Active', 'Do not disturb', 'Idle'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const users = JSON.parse(localStorage.getItem('users') ?? '[]');
    const updatedUsers = users.map((user: User) =>
      user.name === e.target.name
        ? {
            name: e.target.name,
            status: e.target.value
          }
        : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <SearchUserDiv>
      <div id='container'>
        <h1>Search</h1>
        <label htmlFor='search' className='font17'>
          Search:
        </label>
        <input type='text' className='userDetail' name='search' value={search} onChange={handleSearch} />
        <p>{!results.length ? 'No results' : 'Results:'}</p>
        {results.map((user) => (
          <div className='results' key={user.name}>
            <span>{user.name}</span>
            <select id='userStatus' className='status' name={user.name} value={user.status} onChange={handleStatusChange}>
              {statusChoices.map((choice) => (
                <option key={choice} value={choice}>
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
