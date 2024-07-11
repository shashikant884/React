import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1" , {id: "heading"}, "Hey there , I am from reactjs..! !! ");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ReactElement(object) => hrml(browser understands)
// const parent = React.createElement(
//     "div" , {id : "parent"},
//     React.createElement("div" , {id : "child"},
//         [React.createElement("h1" , {}, "Hi am from H1 Tag iam saving this file"),
//             React.createElement("h1" , {}, "Hi am from H2 Tag")
//         ]    
//     )
// );

// console.log(parent);



// const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;
const Title = ()=>(
    <h1 className="container">
        Hello React using jsx
    </h1>
);

const HeadingComponent = ()=>(
    <div id="container">
        <Title/>
        <h1>React functional HeadingComponent</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


// console.log(jsxHeading);



// root.render(parent); 
root.render(<HeadingComponent/>);