import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";



const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    // let btnName = 'Login';
    const [btnNameReact , setBtnNameReact] = useState("Login");
    console.log("Header Render")
    useEffect(()=>{
        console.log("useEffect called");
    });

    const cartItems = useSelector((store)=> store.cart.items);

    return(
        
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
            <img className="w-20"
            src={LOGO_URL}
  
            />
        </div>    
            <div className="flex items-center ">
                <ul className="flex p-4 m-4"  >
                    <li className="p-4">
                        Online Status : {onlineStatus ? '✅' : '⛔'}
                    </li>
                    <li className="p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/cart">Cart - ({cartItems.length})items</Link>
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