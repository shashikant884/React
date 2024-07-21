import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter , RouterProvider} from "react-router-dom"

 
const AppLayout = ()=>(
    <div id="container">
        <Header/>
        <Body/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />
    },
    {
        path : "/about",
        errorElement : <About />
    },
    {
        path : "/contact",
        element : <Contact />
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);