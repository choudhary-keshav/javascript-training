import { useEffect, useState } from 'react';
import { removeWhitespace } from '../utils/functions';
import { User, searchResult } from '../interfaces/interfaces';

const useSearch = (): searchResult => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const currentUsers: User[] = JSON.parse(localStorage.getItem('users') ?? '[]');
    setData(removeWhitespace(search) ? currentUsers.filter((user: User) => user.name.match(search)) : []);
  }, [search]);

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
    setData(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return { search, setSearch, data, handleStatusChange };
};

export default useSearch;
