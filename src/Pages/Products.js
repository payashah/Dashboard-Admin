import "./Products.css"
import React, { useState } from "react"
import { AllProducts } from "../Datas"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button } from "@mui/material";



function Products() {

    const [ProductsList, setProductsList] = useState(AllProducts)
    const [ShowDeleteModal, setShowDeleteModal] = useState(false)

    const DeleteProduct = (ProductID) => {
        setProductsList(ProductsList.filter((product) => product.id != ProductID))
    }


    const Columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "img", headerName: "Image", width: 120, renderCell: (params) => {
                return (
                    <img className="Product-img" src={params.row.img} alt="" />
                )
            }
        },
        { field: "name", headerName: "Name Product", width: 150 },
        { field: "price", headerName: "Price Product", width: 150 },
        {
            field: "actions", headerName: "Acrions", width: 200, renderCell: (params) => {
                return (
                    <div className="products-Actions">
                        <Link to={`/Product/${params.row.id}`}>
                            <EditNoteOutlinedIcon className="products-Actions-edit"></EditNoteOutlinedIcon>
                        </Link>
                        <DeleteOutlineIcon onClick={() => setShowDeleteModal(true)} className="products-Actions-delete"></DeleteOutlineIcon>
                    </div>
                )
            }
        },
    ]



    return (
        <div className="Product-ctrl">
            <DataGrid
                rows={ProductsList}
                columns={Columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                pageSizeOptions={[4]}
                checkboxSelection
                disableRowSelectionOnClick
            />
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
                    <Button onClick={(params) => DeleteProduct(params.row.id)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Products