import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props){
        super(props);
        console.log("parent constructor called");
    }

    componentDidMount(){
        console.log("Parent components did mount ");
    }

    render(){
        return(
            <div>
                <h3>Hello i am from About page</h3>
                <User name={"Shashikant Yadav function..."} />
                <UserClass name ={"Shashikant YAdav classs..."}/>
            </div>
    
            
        );
    }

}





// const About = (()=>{
    // return(
    //     <div>
    //         <h3>Hello i am from About page</h3>
    //         <User name={"Shashikant Yadav function..."} />
    //         <UserClass name ={"Shashikant YAdav classs..."}/>
    //     </div>

        
    // );
// });

export default About;