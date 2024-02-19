import "./TransAction.css"
import React from "react"
import { NewTransActions } from "../Datas"

function TransAction() {

    const Buuton = (({ type }) => {
        return <button className={"transAction-table-tr-td-btn" + type}>{type}</button>
    })

    return (

        <div className="transAction">
            <h3 className="transAction-title">TransActions List</h3>
            <table className="transAction-table">
                <tr className="transAction-table-tr">
                    <th className="transAction-table-tr-th">Customer</th>
                    <th className="transAction-table-tr-th">Date</th>
                    <th className="transAction-table-tr-th">Amount</th>
                    <th className="transAction-table-tr-th">Status</th>
                </tr>
                {NewTransActions.map((user) => (
                    <tr className="transAction-table-tr">
                        <td className="transAction-table-tr-td">
                            <div className="transAction-tr-td-imgName">
                                <img className="transAction-tr-td-img" src={user.img} />
                                <span className="transAction-tr-td-name"> {user.name}</span>
                            </div>
                        </td>
                        <td className="transAction-table-tr-td">{user.date}</td>
                        <td className="transAction-table-tr-td">$ {user.amount}</td>
                        <td className="transAction-table-tr-td"><Buuton type={user.status}></Buuton></td>
                    </tr>
                ))}




            </table>

        </div>
    )
}

export default TransAction