import React, { useEffect, useState } from 'react'
import './index.css'

const Basket = () => {
    const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://northwind.vercel.app/api/products")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  const onAddItem = () => {
    setUser((prev) => [...prev, user]);
  };
 
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className='basket'>
        <h1>Umimu hisse</h1>
        <div className='basketSection'>
            <p>Basket</p>
        </div>
      <ul>
        {user.map((userObj) => (
            <div className='userList'>
                <li key={userObj.id}>{userObj.id}</li>
                <li key={userObj.id}>{userObj.name}</li>
                <button onClick={onAddItem}>Add Basket</button>

            </div>
          ))}
      </ul>

    </div>
  )
}

export default Basket