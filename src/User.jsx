import { useEffect, useState } from "react"

export default function  Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }  ,[])

    return(
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}

/*
* declare a state to hold the data
* Use Effect with callback and dependency
*  use fetch to load data
*/