import "./NewUser.css"
import React from "react"
import { newUser } from "../Datas"
import { useState } from "react"

function NewUser() {

    const [allUser, setAllUser] = useState([])
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Sex, setSex] = useState("")
    const [Address, setAddress] = useState("")

    const SubmitHandler = (event) => {
        // event.preventDefault()
        console.log("paya")

        let mainNewUser = {
            FirstName,
            LastName,
            UserName,
            Password,
            Mobile,
            Email,
            Sex,
            Address,
        }

        setAllUser((prev) => {
            return [...prev.allUser, mainNewUser]
        })
        setFirstName("")
        setLastName("")
        setUserName("")
        setPassword("")
        setMobile("")
        setEmail("")
        setSex("")
        setAddress("")
    }

    return (
        <form className="newUser-ctrl" onSubmit={SubmitHandler}>
            <h1 className="newUser-title"> New User</h1>
            <div className="newUser-inputs" >
                <div className="newUser-inputs-box " >
                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">First Name:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="first name ..."
                            value={FirstName}
                            onChange={(event) => (setFirstName(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">UserName:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="username ..."
                            value={UserName}
                            onChange={(event) => (setUserName(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Mobile:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="09 ..."
                            value={Mobile}
                            onChange={(event) => (setMobile(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">sex:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="Male or Female"
                            value={Sex}
                            onChange={(event) => (setSex(event.target.value))}
                        />
                    </div>
                </div>

                <div className="newUser-inputs-box">
                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Last Name:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="last name ..."
                            value={LastName}
                            onChange={(event) => (setLastName(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Password:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="password ..."
                            value={Password}
                            onChange={(event) => (setPassword(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Email:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder=" ... @gmail.com"
                            value={Email}
                            onChange={(event) => (setEmail(event.target.value))}
                        />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Address:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="address ..."
                            value={Address}
                            onChange={(event) => (setAddress(event.target.value))}
                        />
                    </div>
                </div>

            </div>
            <button className="newUser-btn" > Submit</button>
        </form>
    )
}
export default NewUser