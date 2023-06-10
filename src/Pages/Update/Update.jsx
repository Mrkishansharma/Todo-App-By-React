import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const { todoID } = useParams()

    const [todo, setTodo] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Update Page';
        fetch(`http://localhost:8080/todos/${todoID}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTodo(data)
            })
            .catch(err => {
                alert(err.message || "Something Went Wrong While Adding Todo")
            })
    }, [])


    function hadnleUpdateTodo(e){
        e.preventDefault()
        fetch(`http://localhost:8080/todos/${todoID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then((res) => res.json())
            .then(() => {
                navigate("/")
             })
            .catch(err => {
                alert(err.message || "Something Went Wrong While Adding Todo")
            })
    }


    return (
        <div>
            <h1>Update Page </h1>
            <h1>Todo ID:- {todoID} </h1>

            {
                todo &&
                <form onSubmit={hadnleUpdateTodo} >

                    <input type="text" id="name" placeholder='Name' value={todo.name} onChange={(e) => {
                        setTodo((prevTodo) => ({ ...prevTodo, name: e.target.value }))
                    }} />

                    <textarea placeholder='Description' id='desc' cols={30} rows={5} value={todo.desc} onChange={(e) => {
                        setTodo((prevTodo) => ({ ...prevTodo, desc: e.target.value }))
                    }}  ></textarea>

                    <input type='date' id='deadline' value={todo.deadline} onChange={(e) => {
                        setTodo((prevTodo) => ({ ...prevTodo, deadline: e.target.value }))
                    }} />

                    <input type='submit' value="Submit" />

                </form>
            }


        </div>
    )
}

export default Update;
