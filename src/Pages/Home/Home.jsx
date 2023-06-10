import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        document.title = 'Home Page';
        fetch(`http://localhost:8080/todos`)
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
            })
            .catch(err => {
                alert(err.message || "Something Went Wrong While fetching  Todo")
            })
    }, [])

    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "30px" }}>
                {
                    todos.map(({ id, name, desc, deadline, isCompleted }) => {
                        return (
                            <div key={id} style={{ border: "1px solid red", background: "#ccc", margin: "10px", padding:"10px" }}>

                                <h1> {name} </h1>
                                <h2> {desc} </h2>
                                <h2> {deadline} </h2>
                                <h2> {isCompleted.toString()} </h2>

                                <Link to={`/update/${id}`} > Update Todo </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
