const RestaurantCard = (props)=>{
    const {resData} = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,



    } = resData?.info;
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
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};


export default RestaurantCard;