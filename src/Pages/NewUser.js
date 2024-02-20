import "./NewUser.css"
import React from "react"
import { newUser } from "../Datas"

function NewUser() {

    return (
        <div className="newUser-ctrl">
            <h1 className="newUser-title"> New User</h1>

            <div className="newUser-inputs">
                {newUser.map((user) => (
                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">{user.title}:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder={user.placeholder} />
                    </div>
                ))}
            </div>


            <button className="newUser-btn"> Creat</button>
        </div>
    )
}
export default NewUser