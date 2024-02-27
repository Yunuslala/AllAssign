import axios from 'axios';
import React, { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const Navigate=useNavigate()
    const [initialProducts,setInitialProducts]=useState([])
    const [flag,setFlag]=useState(false)
    const [products, setProducts] = useState(initialProducts);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    useEffect(()=>{
        fetchProduct()
    },[])
    const fetchProduct=async()=>{
        try {
            const headers = {
                'Authorization':localStorage.getItem("LoginToken"),
                'Content-Type': 'application/json',
              }; 
            const response=await axios.get(`https://drab-rose-angler-tux.cyclic.appproduct/get`,{headers});
            const data=response.data;
            setInitialProducts(data);
            console.log(data);
            setProducts(data)
        } catch (error) {
            
        }
    }


    // Function to handle search
    const handleSearch = async(e) => {
        console.log("search",searchQuery);
        setProducts([]);
        const headers = {
            'Authorization':localStorage.getItem("LoginToken"),
            'Content-Type': 'application/json',
          }; 
        const response=await axios.get(`https://drab-rose-angler-tux.cyclic.appproduct/search?find=${searchQuery}`,{headers});
        console.log("searchData",response.data);
        setProducts(response.data);
        setSearchQuery("")
    };

    // Function to handle category filter
    const handleCategoryFilter = (category) => {
        console.log("filteredCategory",category)
        let filteredProducts = [...initialProducts];
        const filteredData=filteredProducts.filter((item)=>item.category==category);
        console.log("filtered object",filteredData)
        setProducts(filteredData);
    };

    // Function to handle sorting
   // Function to handle sorting
const handleSort = (e) => {
    const value = e.target.value;

    let sortedProducts = [...products]; // Create a copy of the products array to avoid mutating the state directly

  if (value === 'PriceAss') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'PriceDis') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'RatingAss') {
        sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (value === 'RatingDis') {
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (value === 'default') {
        // Reset to the original order (e.g., by ID or some other default order)
        // You can replace this with your desired default sorting logic
        sortedProducts = [...initialProducts];
    }

    setProducts(sortedProducts);
    setSortBy(value);
};

const addCart=async(id)=>{
  try {
    const productId=id;
    const UserId=localStorage.getItem("UserId");

    const obj={
        productId,UserId
    }
    const response=await axios.post('https://drab-rose-angler-tux.cyclic.appCartRoute/AddCart',obj,);
    console.log(response.data)
    alert("product has been added in cart");
  } catch (error) {
    console.log(error)
  }
}

    return (
        <div className="product-page">
         <div className='navbar'>
    {
    <div>
      <button className='tast-nav' onClick={(e)=>Navigate('/Product')}>ProductPage</button>
    </div>}
    <div>
    <button className='tast-signup' onClick={(e)=>Navigate('/SignUp')}>Signup</button>
    </div>
    <div>
   { <button className='tast-signup' onClick={(e)=>Navigate('/Cart')}>Cart</button>}
    </div>
    </div>
            <h1>Products</h1>
            
            {/* Search bar */}
            <div>
            <input
               className='input-box'
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
            />
            &nbsp;&nbsp;
            <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
          

            {/* Category filter */}
            <select
            className='input-box'
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>


            <label>Sort by:</label>

            <select className='input-box' value={sortBy} onChange={handleSort}>
            
            <option value="">sorting</option>
            <option value="PriceAss">Price Ascending</option>
            <option value="PriceDis">Price Descending</option>
            <option value="RatingAss">Rating Ascending</option>
            <option value="RatingDis">Rating Descending</option>
            </select>

            {/* Product list */}
            <div className="product-list parentDiv">
                {
                    products.map((product) => (

                    <div key={product._id+product.image} className="product">

                        <img className='img-size' src={product.image} alt="image" />                        <p>{product.category}</p>
                        <p>Rating: ${product.rating.rate}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button className='search-button' onClick={()=>addCart(product._id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
