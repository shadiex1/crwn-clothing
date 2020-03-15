import React from "react";
import {Link} from "react-router-dom"
import "./header.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firbase.utlities";
const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
    <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/signin">CONTACT</Link>
            {
            currentUser ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> 
            :
             <Link className="option" to="/signin"></Link>
                }
        </div>
    </div>
)

export default Header;