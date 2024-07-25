import React from "react"; 

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        const {name } = this.props;
        return(
            <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Location : Mumbai</h3>
            <p>contacts : @shashikant884</p>        
        </div>
        );

    }

    
}
 
export default UserClass;