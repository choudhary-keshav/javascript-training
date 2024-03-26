import React, { useState } from 'react';
import { SearchUserWrapper } from './searchUserStyles';
import useSearch from '../../hooks/useSearch';
import statusChoices from '../../../../../../Keshav/Week3/utils/statusOptions';
import { User } from '../../interfaces/interfaces';

const SearchUser: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<User[]>(useSearch(search));
  console.log('hook: ' + useSearch(search));
  console.log('state: ' + results);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    const users = JSON.parse(localStorage.getItem('users') ?? '[]');
    const updatedUsers = users.map((user: User) =>
      user.name === name
        ? {
            ...user,
            status: value
          }
        : user
    );
    setResults(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <SearchUserWrapper>
      <div id='container'>
        <h1>Search</h1>
        <label htmlFor='search' className='fontMedium'>
          Search:
        </label>
        <input
          type='text'
          className='userDetail'
          name='search'
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
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
    </SearchUserWrapper>
  );
};

export default SearchUser;
