import RestourantCard from "./RestourantCard";
import resList from "../../utils/mockData";
import { useState } from "react";


const Body = ()=>{
  const [listOfrestaurants , setlistOfrestaurants] = useState((resList));

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    
                    const filteredList = listOfrestaurants.filter(
                        (res)=> res.data.avgRating >4
                    );
                    setlistOfrestaurants(filteredList);
                }}
                >
                Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {listOfrestaurants.map((restaurant)=>(
                <RestourantCard key={restaurant.data.id } resData={restaurant}/>
               ))}


            </div>

        </div>
    )
}

export default Body;