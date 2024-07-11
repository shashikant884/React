import React from "react";
import ReactDOM from "react-dom/client";
import img from './images.png'




const Header = ()=>(
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src={img}
            />
        </div>    
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
    </div>
);

const RestourantCard = ()=>{
    return(
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
            />

            <h3>Meghana Foods</h3>
            <h4>Biryani , North Indian , Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>40 Minuts</h4>
        </div>
    );
};

const AppBody = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-comtainer">
                <RestourantCard/>
            </div>

        </div>
    )
}

const AppLayout = ()=>(
    <div id="container">
        <Header/>
        <AppBody/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));





root.render(<AppLayout/>);