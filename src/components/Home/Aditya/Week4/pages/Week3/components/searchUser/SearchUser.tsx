import React from 'react';
import { SearchUserWrapper } from './searchUserStyles';
import statusChoices from '../../../../../../Keshav/Week3/utils/statusOptions';
import useSearch from '../../hooks/useSearch';
import { searchResult } from '../../interfaces/interfaces';

const SearchUser: React.FC = () => {
  const { search, setSearch, data, handleStatusChange }: searchResult = useSearch();

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
        <p>{!data.length ? 'No results' : 'Results:'}</p>
        {data.map((user) => (
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

//empty users
//results overflow
//result update
