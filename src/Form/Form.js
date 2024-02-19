import "./Form.css"
import React, { useState } from "react"

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const submitHandler = ((event) => {
        event.preventDefault()

        let UserInput = {
            firstName,
            lastName,
            email
        }

        if (firstName.length > 0 && lastName.length > 0 && email.length > 0) {
            fetch("https://paya-react-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                body: JSON.stringify(UserInput)
            })

            setFirstName("")
            setLastName("")
            setEmail("")
        }

    })

    return (
        <div className="form">
            <form className="form-ctrl" onSubmit={submitHandler}>
                <input className="form-input" type="text" placeholder="First Name" value={firstName} onChange={(event) => (setFirstName(event.target.value))} /> <br />
                <input className="form-input" type="text" placeholder="Last Name" value={lastName} onChange={(event) => (setLastName(event.target.value))} /> <br />
                <input className="form-input" type="text" placeholder="Email Address" value={email} onChange={(event) => (setEmail(event.target.value))} /> <br />
                <button className="form-btn">Registery</button>

            </form>
        </div>
    )
}

export default Form