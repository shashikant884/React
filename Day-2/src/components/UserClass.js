import React from "react"; 

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count1: 1
        };
        console.log("In side Constructor..")
    } 

    render(){
        console.log("In side rende..")

        const {name } = this.props;
        const {count , count1}  = this.state;                                 
        return(
            <div className="user-card">

            <h3>Name : {name}</h3>
            <h4>{count}</h4>
            <button
                onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    });
                }}
            >Click me to Increase</button>
            <h4>{count1}</h4>
            <h3>Location : Mumbai</h3>
            <p>contacts : @shashikant884</p>        
        </div>
        );

    }

    
}
 
export default UserClass;