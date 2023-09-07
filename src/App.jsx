import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const jason = await info.json();
      setUsers(jason);
    }
    fetchInfo();
  }, [])

  return (
    <div>
      <h1>Contact List ({ users.length })</h1>
      <ul>
        {
          users.map(user => {
            return (
              <li>{user.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
