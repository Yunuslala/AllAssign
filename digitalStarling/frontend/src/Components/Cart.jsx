import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const [storeCart,setStoreCart]=useState([])
  const [flag,setFlag]=useState(false)
  let totalAmount=0;
  const Navigate=useNavigate()
  useEffect(()=>{
    fetchCartData()
  },[flag])
  const fetchCartData=async()=>{
    try {
      const headers = {
        'Content-Type': 'application/json',
      }; 
      const UserId=localStorage.getItem("UserId");

      const response=await axios.get(`https://drab-rose-angler-tux.cyclic.appCartRoute/get/${UserId}`);
      console.log(response.data);
      localStorage.setItem("CartId",response.data.cartId);
      setStoreCart(response.data.products);
     
    } catch (error) {
      console.log(error);
    }
  }
  console.log(storeCart);
  const PurchaseProduct=async()=>{
try {
  const UserId=localStorage.getItem("UserId");
  const CartIds=localStorage.getItem("CartId");
  const obj={
    UserId,CartIds
  }
  const response=await axios.post(`https://drab-rose-angler-tux.cyclic.appOrder/Add/`, obj);
  console.log(response);
  alert(response.data.msg);
  setFlag((prev)=>!prev)
} catch (error) {
  console.log(error)
}
  }
  const IncreaseQuantity=async(productsId,query)=>{
    const Id=localStorage.getItem("CartId");
    const UserId=localStorage.getItem("UserId");
    const obj={
      UserId,query,productsId
    }
    const response=await axios.patch(`https://drab-rose-angler-tux.cyclic.appCartRoute/Increase/Quantity/${Id}`, obj);
    console.log(response.data);
    setFlag((prev)=>!prev)

  }
  const DeleteProduct=async(id)=>{
    try {
      const UserId=localStorage.getItem("UserId");
      const obj={
        UserId
      }
      const response=await axios.delete(`https://drab-rose-angler-tux.cyclic.appCartRoute/delete/${id}/${UserId}`, obj);
      console.log(response.data);
      setFlag((prev)=>!prev)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="product-list">
    <div className='navbar'>
    
    <div>
      <button className='tast-nav' onClick={(e)=>Navigate('/Product')}>ProductPage</button>
    </div>
    <div>
    <button className='tast-signup' onClick={(e)=>Navigate('/SignUp')}>Signup</button>
    </div>
    <div>
    <button className='tast-signup' onClick={(e)=>Navigate('/Cart')}>Cart</button>
    </div>
    </div>

    
            <h1>Cart Page</h1>
           {storeCart.length>0 ? ( <div>
            { <div className='parentDiv'>
    { 
      storeCart.map((product) =>{
        totalAmount+=Number(product.productId.price)*Number(product.quantity)
       return (
        <div key={product.productId._id+product.productId.image} className="product.productId product" >
            <h2>{product.productId.name}</h2>
            <p>{product.productId.title}</p>
            <img className='img-size' src={product.productId.image} alt="image" />
            <p>Price: ${product.productId.price.toFixed(2)}</p>
            <button className='incresebtn' onClick={()=>IncreaseQuantity(product.productId._id,"inc")}>+</button>
            <p>{product.quantity}</p>
            <button className='decresebtn' onClick={()=>IncreaseQuantity(product.productId._id,"decr")}>-</button> &nbsp;
            <button className='delete-logo' onClick={()=>DeleteProduct(product.productId._id)}><AiFillDelete /></button>
        </div>
    )})} 
    </div> }
    <div>
      <p>total-price:{totalAmount.toFixed(2)}</p>
      <button className='search-button' onClick={()=>PurchaseProduct()}>Purchase</button>
    </div>
            </div>):( <button onClick={()=>Navigate("/Product")} className='shopping-btn'>Continue Shopping</button>)}
  
    
    
   
</div>
  )
}

export default Cart
