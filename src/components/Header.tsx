import React, { useState } from "react"

interface User {
  id: number;
  name:string;
  surname:string;
}

const Header = () => {
    const [inpValue, setInpValue] = useState<string>('');
    const [secondInpValue, setSecondInpValue] = useState<string>('');
    const [data, setData] = useState<User[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!inpValue.trim() || !secondInpValue.trim()){
        return;
      }

      const newUser: User = {
        id: Date.now(),
        name: inpValue,
        surname: secondInpValue,
      }

      setData((prevUser) => [...prevUser, newUser])
      setSecondInpValue('');
      setInpValue('');

    }
    const handleDelete = (id: number) => {
      setData((prevUser) => prevUser.filter(user => user.id !==id))
    }
    
  return (
    <div>
        <h2>Todo list</h2>
        <form onSubmit={handleSubmit}>
          <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} placeholder="name" type="text" />
          <input placeholder="surname" value={secondInpValue} onChange={(e) => setSecondInpValue(e.target.value)} type="text" />
          <button type="submit">create</button>
        </form>
        <div>
          {data?.map((user) =>(
            <div key={user.id} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <h2>{user.name}</h2>
              <p>{user.surname}</p>
              <button type="submit" onClick={() => handleDelete(user.id)}>delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Header
