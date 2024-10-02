import "./Navbar.scss"
//icon
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
//image
import logo from "../../assets/image/logo.svg"
import profile from "../../assets/image/profile.jpg"
//router
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
            <>
                <div className ="navBar">
                    <div className ="logo">
                        <img src={logo} alt="" />
                        <span>SerkSa Admin</span>
                    </div>  
                    <div className ="icon">
                        <span><IoIosSearch/></span>
                        <img src={profile} alt="" />
                        <span><IoMdNotificationsOutline/></span>
                        <Link to="/setting"><span className ="setting"><IoSettingsOutline/></span></Link>
                    </div>
                </div>
            </>
    )
}