import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Add() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [deadline, setDeadline] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'add Page'
    }, [])

    function handleSubmitTodo(e) {
        e.preventDefault()
        fetch(`http://localhost:8080/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, deadline, desc, isCompleted: false
            })
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
            <form onSubmit={handleSubmitTodo}>

                <input type="text" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />

                <textarea placeholder='Description' id='desc' cols={30} rows={10} value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>

                <input type='date' id='deadline' value={deadline} onChange={(e) => setDeadline(e.target.value)} />

                <input type='submit' value="Submit" />

            </form>
        </div>
    )
}

export default Add
