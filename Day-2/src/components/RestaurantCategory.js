// import { useState } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems , setShowIndex })=>{

    // const [showItems , setShowItems]= useState(false);
    
    // const HandleClick = ()=>{
    //     setShowItems(!showItems); 
    // };
    // console.log(data)

    const HandleClick = ()=>{
        setShowIndex();
    }



    return(
        <div>
            <div className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 ">
               <div className="flex justify-between cursor-pointer" 
               onClick={HandleClick}
               >
               <samp className="font-bold text-lg">
                {data.title} ({data.itemCards.length}) 
                </samp>
                <samp>⬇️</samp>
               </div>
               {showItems && <ItemList items={data.itemCards} />}
                
            </div>
            
        </div> 
    );
}


export default RestaurantCategory;