import React from "react";
import "./Product.css"
import Chart from "../Components/Chart";
import { ProductData } from "../Datas";

function Product() {

    return (
        <div className="Product-ctrl">
            <div className="Product">
                <h1 className="Product-title"> Product</h1>
                <button className=" Product-btn"> Create</button>
            </div>
            <div className="Product-top">
                <div className="Product-top-left">
                    <Chart title="Sale IN Month" data={ProductData} dataKey="Sales" ></Chart>
                </div>
                <div className="Product-top-right">
                    <div className="Product-top-right-imgName">
                        <img className="Product-top-right-img" src="/pic/mobile.jpg" />
                        <span className="Product-top-right-Name">Mobile</span>
                    </div>
                    <div className="Product-top-right-info">
                        <div className="Product-top-right-info-title">
                            <p className="Product-top-right-info-title-item">ID:</p>
                            <p className="Product-top-right-info-title-item">Name:</p>
                            <p className="Product-top-right-info-title-item">Sales:</p>
                            <p className="Product-top-right-info-title-item">Active:</p>
                            <p className="Product-top-right-info-title-item">In Stock:</p>
                        </div>
                        <div className="Product-top-right-info-respond">
                            <p className="Product-top-right-info-respond-item">123</p>
                            <p className="Product-top-right-info-respond-item">Mobile</p>
                            <p className="Product-top-right-info-respond-item">$ 4000</p>
                            <p className="Product-top-right-info-respond-item"> Yes</p>
                            <p className="Product-top-right-info-respond-item"> NO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Product-button">
                <div className="Product-button-left">
                    <form className="Product-button-left-form">
                        <label className="Product-button-left-form-label">Product Name:</label>
                        <input className="Product-button-left-form-label-input" type="text" placeholder="Name ..." />

                        <label className="Product-button-left-form-label">In Stock:</label>
                        <select className="Product-button-left-form-selectBOx">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <label className="Product-button-left-form-label">Active:</label>
                        <select className="Product-button-left-form-selectBOx">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </form>
                </div>
                <div className="Product-button-right"></div>
            </div>
        </div>
    )
}
export default Product