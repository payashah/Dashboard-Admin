import "./Product.css"
import React from "react"

function Product(props){
    const AddToCart = ((id)=>{
      props.onAddProduct(id)
    })

    return(
              <div className="product-products">
                <p className="product-products-title">{props.name}</p>
                <img className="product-products-img" src={props.img} alt="pic" />
                <p className="product-products-price">{props.price} $</p>
                <p className="product-products-description">Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Iste modi vitae tempora officiis quam numquam?</p>
                <button className="product-products-btn" onClick={()=>(AddToCart(props.id))}>Add To Cart</button>
              </div>
    )
}

export default Product