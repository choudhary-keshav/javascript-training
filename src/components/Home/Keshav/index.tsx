import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { KeshavWrapper } from './styles'

const Keshav = () => {

  const [selectedWeek, setSelectedWeek] = useState("");

  const handleWeekClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedWeek(e.currentTarget.value);
  };

  return (
    <KeshavWrapper>
        <div className="weekButtonsContainer">
          <Link to="week1&2">
            <button className={`weekButton ${selectedWeek === "week1" ? 'active' : ''}`} value="week1" onClick={handleWeekClick}>Week-1&2</button>
          </Link>
          <Link to="week3">
            <button className={`weekButton ${selectedWeek === "week3" ? 'active' : ''}`} value="week3" onClick={handleWeekClick}>Week-3</button>
          </Link>
          <Link to="week4">
            <button className={`weekButton ${selectedWeek === "week4" ? 'active' : ''}`} value="week4" onClick={handleWeekClick}>Week-4</button>
          </Link>
          <Link to="week5">
            <button className={`weekButton ${selectedWeek === "week5" ? 'active' : ''}`} value="week5" onClick={handleWeekClick}>Week-5</button>
          </Link>
        </div>
        <Outlet></Outlet>
    </KeshavWrapper>
  )
}

export default Keshav