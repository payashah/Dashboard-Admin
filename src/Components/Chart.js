import React from "react";
import "./Chart.css"
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

function Chart({ title, data, dataKey, grid }) {

    return (
        <div className="chart">
            <h3>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="red"></XAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="blue"></Line>
                    <Tooltip></Tooltip>
                    {grid && <CartesianGrid stroke="gray" strokeDasharray={5}></CartesianGrid>}

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart