import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import {createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom"
import {Provider} from "react-redux"
import appStore from "../utils/appstore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));
 
const AppLayout = ()=>(
    <Provider store={appStore}>
    <div id="container">
        <Header/>
        <Outlet/>
    </div>
    </Provider>
);

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path :"/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            },   
            {
                path: '/grocery',
                element: (
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                  </Suspense>
                ),
            },
            {
                path : "/cart",
                element : <Cart />
            }
        ],
        errorElement : <Error />
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);