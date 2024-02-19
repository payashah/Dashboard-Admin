import "./NewUser.css"
import React from "react"

function NewUser() {

    return (
        <div className="newUser-ctrl">
            <h1 className="newUser-title"> New User</h1>
            <div className="newUser-inputs">
                <div className="newUser-inputs-box">
                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">First Name:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="first name ..." />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">UserName:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="username ..." />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Mobile:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="09 ..." />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">sex:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="Male or Female" />
                    </div>
                </div>

                <div className="newUser-inputs-box">
                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Last Name:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="last name ..." />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Password:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="password ..." />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Email:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder=" ... @gmail.com" />
                    </div>

                    <div className="newUser-inputs-item">
                        <p className="newUser-inputs-item-title">Address:</p>
                        <input className="newUser-inputs-item-input" type="text" placeholder="address ..." />
                    </div>
                </div>

            </div>
            <button className="newUser-btn"> Creat</button>
        </div>
    )
}
export default NewUser