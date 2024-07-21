import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";



const Header = ()=>{
    // let btnName = 'Login';
    const [btnNameReact , setBtnNameReact] = useState("Login");
    console.log("Header Render")
    useEffect(()=>{
        console.log("useEffect called");
    });

    return(
        
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src={LOGO_URL}
  
            />
        </div>    
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="loginBtn" onClick={()=>{
                        // btnName = 'Logout';
                        btnNameReact === 'Login'
                        ? setBtnNameReact("logout") 
                        : setBtnNameReact("Login")
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>


                </ul>

  
            </div>

    </div>
  
  )};


export default Header;