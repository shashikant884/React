import { useState } from "react";

const User = (props)=>{
    const [count , setCount] = useState(0);
    const count1 =useState(1);

    
    return(
        <div className="user-card">
            <h3>Name : {props.name}</h3>
            <h4>{count}</h4>
            <button
            onClick={()=>{
                setCount(count+1)
            }}
            >click me!</button>
            <h4>{count1}</h4>
            <h3>Location : Mumbai</h3>
            <p>contacts : @shashikant884</p>        
        </div>
    );
};

export default User;