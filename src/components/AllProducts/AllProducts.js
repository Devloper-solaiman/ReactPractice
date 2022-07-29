import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'
const AllProducts = (props) => {
    const { setCartCount } = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((rest) => rest.json())
            .then((data) => setProducts(data))
    }, [products])

    return (
        <div>
            <h1>AllProduct</h1>
            <div className="row container">
                {
                    products.map((pd) => (<SingleProduct
                        key={pd.id}
                        product={pd}
                        setCartCount={setCartCount}
                    ></SingleProduct>))
                }
            </div>
        </div>
    );
};

export default AllProducts;