import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1))

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const jason = await info.json();
      setUsers(jason);
    }
    fetchInfo();
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash.slice(1)*1);
    });
  }, [])

  const user = users.find( user => hash === user.id);

  return (
    <div>
      <h1>Contact List ({ users.length })</h1>
      <ul>
        {
          users.map(user => {
            return (
              <li key={user.id} className={user.id === hash ? 'selected': ''}><a href={`#${user.id === hash ? '': user.id}`}>{user.name}</a></li>
            )
          })
        }
      </ul>
      {
        user ? (<h3>User's Email: {user.email}</h3>): null
      }
    </div>
  )
}

export default App
