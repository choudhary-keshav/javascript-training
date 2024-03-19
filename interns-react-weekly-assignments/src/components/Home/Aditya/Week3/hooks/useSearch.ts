import { useEffect, useState } from 'react';
import { removeWhitespace } from '../utils/utils';

interface User {
  name: string;
  status: string;
}

const useSearch = (name: string): User[] => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const currentUsers: User[] = JSON.parse(localStorage.getItem('users') ?? '[]');
    if (removeWhitespace(name)) setData(currentUsers.filter((user: User) => user.name.match(name)));
    else setData([]);
  }, [name]);

  return data;
};

export default useSearch;
