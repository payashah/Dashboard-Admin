import "./UserList.css"
import React, { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { UserRows } from "../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button } from "@mui/material";



function UserList() {

    const [UserTransActionRows, setUserTransActionRows] = useState(UserRows)
    const [ShowDeleteModal, setShowDeleteModal] = useState(false)

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
                        <DeleteOutlineIcon onClick={() => setShowDeleteModal(true)} className="UserList-Actions-delete"></DeleteOutlineIcon>

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
            <Dialog
                open={ShowDeleteModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ color: "red" }}>
                    Delete Item !
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are You Sure To Delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDeleteModal(false)} >Disagree</Button>
                    <Button onClick={(params) => UserDelete(params.row.id)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default UserList













