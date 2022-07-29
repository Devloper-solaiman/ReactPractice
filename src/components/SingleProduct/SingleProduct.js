import React from 'react';
import './SingleProduct.css'
import ReactModal from "./../ReactModal/ReactModal";

const SingleProduct = (props) => {
    const { setCartCount } = props

    return (
        <div className='col-md-4 '>
            <div className=" card p-3 border m-auto border">
                <h4>{props.product.title.slice(0, 10)}</h4>
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <p>$:{props.product.price}</p>
                <div className="d-flex justify-content-around">
                    <button onClick={setCartCount} className='btn btn-success'>add to card</button>
                    <button className='btn btn-danger'> delete </button>
                    <ReactModal product={props.product} ></ReactModal>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;