import "./Cart.css"
import React from "react"

function Cart(props){

    const RemoveFromCart = ((id)=>{
        props.onRemoveProduct(id)
    })

    return(
        <tr className="cart">
            <th className="cart-data">{props.name}</th>
            <th className="cart-data"><img className="cart-data-img" src={props.img} alt="pic" width={100}/></th>
            <th className="cart-data">{props.price} $</th>
            <th className="cart-data"><button className="cart-data-btn" onClick={()=>(RemoveFromCart(props.id))}>Remove</button></th>

        </tr>
    )
}

export default Cart