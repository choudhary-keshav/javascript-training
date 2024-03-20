import React, { useState, useEffect } from 'react';
import { RandomFactsWrapper } from './RandomFactsStyle';
import { APIKEY } from './utils';

const RandomFacts: React.FC = () => {
  const [fact, setFact] = useState<string>('');

  const fetchRandomFact = async (): Promise<void> => {
    const response = await fetch(APIKEY);
    const data = await response.json();
    setFact(data.text);
  };

  useEffect(() => {
    fetchRandomFact();
  }, []);

  return (
    <RandomFactsWrapper>
      <div className='funFactContainer'>
        <h2>Random Fun Fact</h2>
        <p>{fact}</p>
        <button onClick={fetchRandomFact}>Next Fact</button>
      </div>
    </RandomFactsWrapper>
  );
};

export default RandomFacts;
