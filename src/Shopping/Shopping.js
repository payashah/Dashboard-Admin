import Cart from "./Cart"
import Header from "./Header"
import Product from "./Product"
import "./Shopping.css"
import React, { useState } from "react"


function Shopping(){

    const [products , setProducts] = useState([
        {id:1 , name:"kole" , img:"./pic/kole.jpg" , price:400} ,
        {id:2 , name:"mobile" , img:"./pic/mobile.jpg" , price:2000} ,
        {id:3 , name:"shirt" , img:"./pic/shirt.jpg" , price:550} ,
        {id:4 , name:"sharzher" , img:"./pic/sharzher.jpg" , price:130} ,
        {id:5 , name:"atr" , img:"./pic/atr.jpg" , price:270} ,
        {id:6 , name:"glasses" , img:"./pic/glasses.jpg" , price:800} ,
    ])
    const [cart , setCart] = useState([])
    const [ totalPrice , setTotalPrice] = useState([])


    const AddProductToCart = ((productId)=>{
        let NewAddProduct = products.find((product)=>{
            return productId === product.id
        })
        
        setCart((prevState)=>{
            return [...prevState , NewAddProduct]
        })

        let prevPrice = NewAddProduct.price
        

        setTotalPrice(()=>{

        })

       
        
    })

    const RemoveProductFromCart = ((productId)=>{
        let RemoveProduct = cart.filter((product)=>{
            return productId !== product.id
        })
        setCart(RemoveProduct)
    })

    return(

        <div className="shopping-ctrl">
            <Header></Header>
            <div className="shopping-product">
                 {products.map((product)=>(
                 <Product {...product} key={product.id} onAddProduct={AddProductToCart}></Product> 
                  ))}
            </div>
            <div className="shopping-cart">
                  <table className="shopping-table ">
                   <thead>
                    <tr>
                        <th className="shopping-table-header">Name</th>
                        <th className="shopping-table-header">Image</th>
                        <th className="shopping-table-header">Price</th>
                        <th className="shopping-table-header">Doing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product)=>(
                       <Cart {...product} key={product.id} onRemoveProduct={RemoveProductFromCart}></Cart>

                    ))}
                  </tbody>
                </table>
                <table className="shopping-table-totalPrice">
                    <thead>
                        <tr>
                            <th className="shopping-table-totalPrice-header" > Total Price :</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="shopping-table-totalPrice-data">{totalPrice}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
                       

        </div>
    )
}

export default Shopping







