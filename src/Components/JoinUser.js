import "./JoinUser.css"
import React from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NewJoin } from "../Datas";

function JoinUser() {

    return (

        < div className="joinUser" >
            <h3 className="joinUser-title">New Join Personal</h3>
            {NewJoin.map((user) => (
                <div className="joinUser-info" >
                    <img className="joinUser-info-img" src={user.img} />
                    <div className="joinUser-info-nameJob">
                        <span className="joinUser-info-name">{user.name}</span> <br />
                        <span className="joinUser-info-job">{user.job}</span>
                    </div>
                    <button className="joinUser-info-btn"><VisibilityIcon className="joinUser-info-btn-icon"></VisibilityIcon></button>
                </div >
            ))}



        </ div>

    )
}

export default JoinUser

