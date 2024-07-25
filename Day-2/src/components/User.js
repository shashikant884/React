const User = (props)=>{
    
    return(
        <div className="user-card">
            <h3>Name : {props.name}</h3>
            <h3>Location : Mumbai</h3>
            <p>contacts : @shashikant884</p>        
        </div>
    );
};

export default User;