import { useState } from 'react';
import { User } from '../interface/interface';
import statusOptions from '../utils/statusOptions';

export const useUserData = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUserData((prevUserData) => [...prevUserData, newUser]);
  };

  const changeStatus = (index: number) => {
    setUserData((prevUserData) => {
      const updatedUserData = [...prevUserData];
      const statusIndex = statusOptions.indexOf(updatedUserData[index].status);
      updatedUserData[index].status = statusOptions[(statusIndex + 1) % statusOptions.length];
      return updatedUserData;
    });
  };

  return { userData, addUser, changeStatus };
};
