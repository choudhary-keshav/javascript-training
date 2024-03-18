import React, { useEffect, useState, useRef } from "react";
import { FormDiv } from "./formStyles";

interface Profile {
  [key: string]: string;
}

const Form=()=> {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    dob: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const getTodayDate = () => new Date().toISOString().slice(0, 10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeType = e.target.name;
    setProfile((oldProfile) => {
      oldProfile[changeType] = e.target.value;
      return { ...oldProfile };
    });
  };

  return (
    <FormDiv>
      <h1 id="heading">Form App</h1>
      <div id="container">
        <form>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" value={profile.name} onChange={handleChange} ref={inputRef} required />    
          <label htmlFor="dob">Date of Birth:</label>
          <input
            name="dob"
            type="date"
            min="1900-01-01"
            max={getTodayDate()}
            value={profile.dob}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            name="phone"
            type=""
            value={profile.phone}
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" value={profile.email} onChange={handleChange} required />
          <input id="submit" type="submit" />
        </form>
      </div>
    </FormDiv>
  );
}

export default Form;

