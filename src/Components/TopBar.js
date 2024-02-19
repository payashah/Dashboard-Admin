import "./TopBar.css"
import React from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBar() {

    return (
        <div className="topbar-page">
            <div className="topbar-ctrl">
                <div className="topbar-title">
                    <h1 className="topbar-name"> Paya Learn</h1>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <NotificationsIcon></NotificationsIcon>
                        <span className="topbar-icons-span">2</span>
                    </div>
                    <div className="topbar-icons-item">
                        <LanguageIcon></LanguageIcon>
                        <span className="topbar-icons-span">3</span>
                    </div>
                    <div className="topbar-icons-item">
                        <SettingsIcon></SettingsIcon>
                    </div>
                    <img className="topbar-icons-img" src="./pic/react.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default TopBar