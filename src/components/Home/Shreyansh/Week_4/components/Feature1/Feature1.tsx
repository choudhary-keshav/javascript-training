import React, { useState, useEffect } from "react";
import { Feature1Wrapper } from "./Feature1Style";
import { APIKEY } from "./utils";

const Feature1: React.FC = () => {
  const [fact, setFact] = useState<string>("");

  const fetchRandomFact = async () => {
    const response = await fetch(APIKEY);
    const data = await response.json();
    setFact(data.text);
  };

  useEffect(() => {
    fetchRandomFact();
  }, []);

  return (
    <Feature1Wrapper>
      <div className="funFactContainer">
        <h2>Random Fun Fact</h2>
        <p>{fact}</p>
        <button onClick={fetchRandomFact}>Next Fact</button>
      </div>
    </Feature1Wrapper>
  );
};

export default Feature1;
