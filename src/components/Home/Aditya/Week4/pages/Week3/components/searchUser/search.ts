import { User } from '../../interfaces/interfaces';
import { removeWhitespace } from '../../../../utils/functions';

const searchLocalStorage = (search: string) => {
  const currentUsers: User[] = JSON.parse(localStorage.getItem('users') ?? '[]');
  return removeWhitespace(search) ? currentUsers.filter((user: User) => user.name.match(search)) : [];
};

export default searchLocalStorage;
