const RestaurantCard = (props)=>{
    const {resData} = props;

    const {
      cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,



    } = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] border border-solid border-black rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg"
                alt="res-logo"
                 
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv" 
                src={
                    // "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5933.JPG"
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId

                }    
                
            />
 
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};


export const withPromtedeLabel = (RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg m-2 p-2 rounded-lg" >🟢</label>
          <RestaurantCard {...props} /> 
        </div>
      );
    };
  };

export default RestaurantCard;