// const heading = React.createElement("h1" , {id: "heading"}, "Hey there , I am from reactjs..! !! ");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ReactElement(object) => hrml(browser understands)
const parent = React.createElement(
    "div" , {id : "parent"},
    React.createElement("div" , {id : "child"},
        [React.createElement("h1" , {}, "Hi am from H1 Tag"),
            React.createElement("h1" , {}, "Hi am from H2 Tag")
        ]    
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 