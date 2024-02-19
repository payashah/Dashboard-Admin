import "./SideBar.css"
import React from "react"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from "react-router-dom";


function SideBar() {

    return (
        <div className="sidebar-page">
            <div className="sidebar-ctrl">
                <div className="sidebar">
                    <h3 className="sidebar-title">Dashboard :</h3>
                    <div className="sidebar-dashboard">
                        <div className="sidebar-dashboard-menu">
                            <Link to="/" className="sidebar-dashboard-menu-item"> <LineStyleIcon className="sidebar-dashboard-menu-item-logo"></LineStyleIcon>Home</Link>
                            <li className="sidebar-dashboard-menu-item"> <TimelineIcon className="sidebar-dashboard-menu-item-logo"></TimelineIcon>Analystics</li>
                            <li className="sidebar-dashboard-menu-item"> <TrendingUpIcon className="sidebar-dashboard-menu-item-logo"></TrendingUpIcon>Sales</li>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3 className="sidebar-title">Quick Menu :</h3>
                    <div className="sidebar-dashboard">
                        <div className="sidebar-dashboard-menu">
                            <Link to="/NewUser" className="sidebar-dashboard-menu-item"> <PersonAddIcon className="sidebar-dashboard-menu-item-logo"></PersonAddIcon> New User</Link>
                            <Link to="/Users" className="sidebar-dashboard-menu-item"> <PeopleAltIcon className="sidebar-dashboard-menu-item-logo"></PeopleAltIcon>Users</Link>
                            <Link to="/Products" className="sidebar-dashboard-menu-item"> <StorefrontIcon className="sidebar-dashboard-menu-item-logo"></StorefrontIcon>Products</Link>
                            <li className="sidebar-dashboard-menu-item"> <AttachMoneyIcon className="sidebar-dashboard-menu-item-logo"></AttachMoneyIcon>Transations</li>
                            <li className="sidebar-dashboard-menu-item"> <LeaderboardIcon className="sidebar-dashboard-menu-item-logo"></LeaderboardIcon>Reports</li>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3 className="sidebar-title">Notifications :</h3>
                    <div className="sidebar-dashboard">
                        <div className="sidebar-dashboard-menu">
                            <li className="sidebar-dashboard-menu-item"> <MailOutlineIcon className="sidebar-dashboard-menu-item-logo"></MailOutlineIcon>Mails</li>
                            <li className="sidebar-dashboard-menu-item"> <DynamicFeedIcon className="sidebar-dashboard-menu-item-logo"></DynamicFeedIcon>Feedback</li>
                            <li className="sidebar-dashboard-menu-item"> <InsertCommentIcon className="sidebar-dashboard-menu-item-logo"></InsertCommentIcon>Massages</li>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3 className="sidebar-title">Staff :</h3>
                    <div className="sidebar-dashboard">
                        <div className="sidebar-dashboard-menu">
                            <li className="sidebar-dashboard-menu-item"> <BusinessCenterIcon className="sidebar-dashboard-menu-item-logo"></BusinessCenterIcon>Manage</li>
                            <li className="sidebar-dashboard-menu-item"> <TimelineIcon className="sidebar-dashboard-menu-item-logo"></TimelineIcon>Analystics</li>
                            <li className="sidebar-dashboard-menu-item"> <TrendingUpIcon className="sidebar-dashboard-menu-item-logo"></TrendingUpIcon>Reports</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar