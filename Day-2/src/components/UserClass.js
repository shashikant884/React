import React from "react"; 

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        // console.log("Child constructor called");


        this.state = {
            count: 0,
            count1: 1,
        userInfo : {
            login: "dmmuy",
            id : "Default"
        },
        };
    }

    async componentDidMount(){
        // console.log("child components did mount ");

        const data = await fetch("https://api.github.com/users/shashikant884");
        const json = await data.json();


        this.setState({
            userInfo : json,
        });

        console.log(json);


    }
    componentDidUpdate(){
        console.log("components did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        console.log("In side rende..")
        const {login , id } = this.state.userInfo;
        const {count , count1}  = this.state;                                 
        return(
            <div className="user-card">

            <h3>Name git : {login}</h3>
            <h3>Location : {id}</h3>

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