import "./Products.css"
import React, { useState } from "react"
import { AllProducts } from "../Datas"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Link } from "react-router-dom";



function Products() {

    const [ProductsList, setProductsList] = useState(AllProducts)

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
                        <DeleteOutlineIcon onClick={() => (DeleteProduct(params.row.id))} className="products-Actions-delete"></DeleteOutlineIcon>
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
        </div>
    )
}
export default Products