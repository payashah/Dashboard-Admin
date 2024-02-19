import "./UserList.css"
import React, { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { UserRows } from "../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';



function UserList() {

    const [UserTransActionRows, setUserTransActionRows] = useState(UserRows)

    const UserDelete = (UserID) => {
        setUserTransActionRows(UserTransActionRows.filter((user) => user.id != UserID))
    }

    const Columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "User", headerName: "UserName", width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to="/" className="UserList-imgName">
                            <img className="UserList-img" src={params.row.img} />
                            <span className="UserList-name">{params.row.userName}</span>
                        </Link>
                    </>

                )
            }
        },
        { field: "email", headerName: "Email", width: 250 },
        { field: "status", headerName: "Status", width: 100 },
        { field: "transAction", headerName: "TransAction", width: 100 },
        {
            field: "actions", headerName: "Actions", width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link className="UserList-Actions">
                            <EditNoteOutlinedIcon className="UserList-Actions-edit"></EditNoteOutlinedIcon>
                        </Link>
                        <DeleteOutlineIcon onClick={() => { UserDelete(params.row.id) }} className="UserList-Actions-delete"></DeleteOutlineIcon>

                    </>
                )
            }
        },

    ]


    return (
        <div className="UserList">
            <DataGrid
                rows={UserTransActionRows}
                columns={Columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                pageSizeOptions={[4]}
            ></DataGrid>
        </div>
    )
}

export default UserList













