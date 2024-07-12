import RestourantCard from "./RestourantCard";
import resList from "../../utils/mockData";



const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {resList.map((restaurant)=>(
                <RestourantCard key={restaurant.data.id } resData={restaurant}/>
               ))}


            </div>

        </div>
    )
}

export default Body;