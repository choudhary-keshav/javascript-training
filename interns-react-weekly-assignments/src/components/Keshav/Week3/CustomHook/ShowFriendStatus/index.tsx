import React from "react"
import { useEffect, useState } from "react"
import { debounce } from "lodash"
import { User } from "../../interface/interface"
import { ShowFriendStatusWrapper } from "./styles"

interface ShowFriendStatusProps {
  userData: User[]
  changeStatus: (index: number) => void
}

const ShowFriendStatus: React.FC<ShowFriendStatusProps> = ({ userData, changeStatus }) => {

  const [searchInput, setSearchInput] = useState("");

  const [filteredData, setFilteredData] = useState(userData);

  const debouncedHandleSearchInputChange = debounce((value: string) => {
    setSearchInput(value)
  }, 1000);

  useEffect(() => {
    setFilteredData(userData.filter(user => user.username.includes(searchInput)));
  }, [userData, searchInput])

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearchInputChange(e.target.value);
  }

  const handleStatusButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = parseInt(e.currentTarget.id, 10);
    if (!isNaN(index)) {
      changeStatus(index);
    }
  }

  return (
    <ShowFriendStatusWrapper>
      <input onChange={handleSearchInputChange} type="text" name="" id="" placeholder="Search User" />
      {filteredData.map((user, index) => (
        <div key={Math.random()}>
          <p>
            {user.username} <button id={index.toString()} onClick={handleStatusButtonClick} className={`statusButton ${user.status}`}>{user.status}</button>
          </p>
        </div>
      ))}
      {userData.length ? ((filteredData.length) ? <p className="resultMessage">{filteredData.length} matching results found!</p> : <p className="resultMessage">No matching results found!</p>) : <p></p>}
    </ShowFriendStatusWrapper>
  )
}

export default ShowFriendStatus