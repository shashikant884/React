import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../utils/cartSlice";


const Cart = ()=>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const handClearCart = ()=>{
        dispatch(clearItem());
    };

    return(
    <div>
        <h1>Cart Item</h1>
        <button onClick={handClearCart}>Clear Cart</button>
        {cartItems.length === 0 && (<h1>Cart is Empty add item to the cart..</h1>)

        }
        <ItemList items={cartItems}/>
    </div>
    );


} 


export default Cart;