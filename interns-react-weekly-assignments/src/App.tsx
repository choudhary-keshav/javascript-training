import { useState } from 'react';
import React from 'react';
import { AppWrapper } from './styles';
import Keshav from './components/Keshav';
import Aditya from './components/Aditya';
import Shreyansh from './components/Shreyansh';
import Ritika from './components/Ritika';

const App = () => {

  const [selectedIntern, setSelectedIntern] = useState("");

  const handleInternClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedIntern(e.currentTarget.value);
  };

  return (
    <AppWrapper>
      <h1 className="mainHeading">Interns - React Weekly Assignments</h1>
      <div className="internButtonsContainer">
        <button className={`internButton ${selectedIntern === "Keshav Choudhary" ? 'active' : ''}`} value="Keshav Choudhary" onClick={handleInternClick}>Keshav Choudhary</button>
        <button className={`internButton ${selectedIntern === "Aditya Sharma" ? 'active' : ''}`} value="Aditya Sharma" onClick={handleInternClick}>Aditya Sharma</button>
        <button className={`internButton ${selectedIntern === "Shreyansh Khatri" ? 'active' : ''}`} value="Shreyansh Khatri" onClick={handleInternClick}>Shreyansh Khatri</button>
        <button className={`internButton ${selectedIntern === "Ritika Garg" ? 'active' : ''}`} value="Ritika Garg" onClick={handleInternClick}>Ritika Garg</button>
      </div>

      {selectedIntern === 'Keshav Choudhary' && <Keshav />}
      {selectedIntern === 'Aditya Sharma' && <Aditya />}
      {selectedIntern === 'Shreyansh Khatri' && <Shreyansh />}
      {selectedIntern === 'Ritika Garg' && <Ritika />}

    </AppWrapper>
  );
}

export default App;
