import React, { useEffect, useState } from 'react'

const apiURL = 'https://reqres.in/api/users'

function App() {
  const [users, setUsers] = useState([])

  const sortByAscendingLastName = () => {
    console.log('Ascending')
  }
  const sortByDescendingLastName = () => {
    console.log('Descending')
  }
  
  useEffect(() => {
    fetch(apiURL)
    .then(resp => resp.json())
    .then(response => {
      const {data} = response
      console.log(data);
      setUsers(data)
    })
  }, [])

  return (
    <>
      <button onClick={sortByAscendingLastName}>Ascending</button>
      <button onClick={sortByDescendingLastName}>Descending</button>

      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.first_name} {user.last_name} {user.email} <img src={user.avatar} alt={user.name}/>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
