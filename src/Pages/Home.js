import Chart from "../Components/Chart"
import Features from "../Components/Features"
import JoinUser from "../Components/JoinUser"
import TransAction from "../Components/TransAction"
import { Xdata, NewJoin } from "../Datas"
import "./Home.css"
import React from "react"


function Home() {

    return (
        <div>
            <Features></Features>
            <Chart title="Mounth Sales" data={Xdata} grid dataKey="sale"></Chart>
            <div className="home-footer">
                <JoinUser></JoinUser>
                <TransAction></TransAction>



                {/* <JoinUser></JoinUser>
                <TransAction></TransAction> */}



            </div>
        </div>
    )
}
export default Home