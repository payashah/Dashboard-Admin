import "./Features.css"
import React from "react"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Features() {

    return (

        <div className="feature-page">
            <div className="feature-ctrl">
                <span className="feature-title">Revanue</span>
                <div className="feature-price-ctrl">
                    <span className="feature-price">$ 2.456</span>
                    <span className="feature-price-telorance negative">11.4 </span>
                    <span className="feature-price-telorance-icon "><ArrowDownwardIcon className="feature-price-telorance-icon negative"></ArrowDownwardIcon></span>
                </div>
                <span className="feature-text">Compared To Last Mounth</span>
            </div>

            <div className="feature-ctrl">
                <span className="feature-title">Sales</span>
                <div className="feature-price-ctrl">
                    <span className="feature-price">$ 1.2</span>
                    <span className="feature-price-telorance negative">1.4 </span>
                    <span className="feature-price-telorance-icon"><ArrowDownwardIcon className="feature-price-telorance-icon negative"></ArrowDownwardIcon></span>
                </div>
                <span className="feature-text">Compared To Last Mounth</span>
            </div>

            <div className="feature-ctrl">
                <span className="feature-title">Cost</span>
                <div className="feature-price-ctrl">
                    <span className="feature-price">$ 5.154</span>
                    <span className="feature-price-telorance">3.4 </span>
                    <span className="feature-price-telorance-icon "><ArrowUpwardIcon></ArrowUpwardIcon></span>
                </div>
                <span className="feature-text">Compared To Last Mounth</span>
            </div>
        </div>
    )
}
export default Features