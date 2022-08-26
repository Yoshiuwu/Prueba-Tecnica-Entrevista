import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])

  const fetchData = async() => {
    const result = await fetch('https://reqres.in/api/users')
    const getResult = await result.json()
    setData(getResult.data)
    console.log(getResult.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const sortByAscendingLasName = () => {
    data.sort()
  }

  return (
    <>
      <button onClick={() => sortByAscendingLasName}>Ascending</button>
      {data.map(function(user) {
        return(<li>{user.first_name} {user.last_name} {user.email}</li>)
      })}
    </>
  );
}

export default App;
