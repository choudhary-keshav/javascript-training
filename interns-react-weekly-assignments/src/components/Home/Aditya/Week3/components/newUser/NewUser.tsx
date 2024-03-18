import React, { useEffect, useState } from "react";
import { NewUserDiv } from "./newUserStyles";
import { removeWhitespace } from "../../utils/utils";

interface User {
  name: string,
  status: string
}

interface ObjectCheck {
  [key: string]: boolean;
}

const NewUser = () => {
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("users") ?? "[]"));
  const [isValidUser, setValidUser] = useState<ObjectCheck>({
    name: false,
    status: false,
  });
  const [newUser, setNewUser] = useState<User>({
    name: "",
    status: "",
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const statusChoices = ["Busy", "Active", "Do not disturb", "Idle"];

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    let isValid = true;
    if (e.target.name === "name") {
      isValid = !users.find((user) => user.name === e.target.value);
      setValidUser((prevValid) => {
        return { ...prevValid, name: isValid };
      });
    }
      isValid &&
      setNewUser((oldState) => {
        const newState = { ...oldState };
        newState[e.target.name as keyof User] = removeWhitespace(e.target.value);
        return newState;
      });
    isValid &&
      setValidUser((oldState) => {
        const newState = { ...oldState };
        newState[e.target.name] = !!removeWhitespace(e.target.value);
        return newState;
      });
  };

  const handleNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);
    isValidUser.name &&
      isValidUser.status &&
      setUsers((oldUsers) => {
        return [...oldUsers, newUser];
      });
    setValidUser(() => {
      return { name: false, status: false };
    });
    setNewUser({
      name: "",
      status: "",
    });
  };

  return (
    <NewUserDiv>
      <div id="newUser">
        <h1>New User:</h1>
        <form onSubmit={handleNewUser}>
          <label htmlFor="name">Name:</label>
          <input className="wide" type="text" name="name" value={newUser.name} onChange={handleUserChange} />
          {!isValidUser.name && <p className="warning">Invalid Username</p>}
          <label htmlFor="status">Status:</label>
          <select className="wide" name="status" id="selectStatus" value={newUser.status} onChange={handleUserChange}>
            <option value="" disabled selected>
              Select An Option
            </option>
            {statusChoices.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {!isValidUser.status && <p className="warning">Invalid Status</p>}
          <button type="submit" disabled={!isValidUser.name || !isValidUser.status}>
            Submit
          </button>
        </form>
      </div>
    </NewUserDiv>
  );
};

export default NewUser;
