import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


 

const RestourantCard = (props)=>{
    const {resData} = props;

    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime



    } = resData?.data;
    return(
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv" 
                // src={
                //     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                //     cloudinaryImageId

                // }    
                
            />

            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};




const AppLayout = ()=>(
    <div id="container">
        <Header/>
        <Body/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);