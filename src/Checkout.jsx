import React from "react";
import { Link } from "react-router-dom";
import './checkout.css';

const Checkout =()=>{
     return(
        <>

    <section>

    <div className="shop-img mt-3">
      
     <p className="text-center text-white pt-5">Home^ <span className="blog-p">Cart</span></p>
    </div>


    <div className="d-lg-flex">

    <div className="check-box-1 ms-3 mt-5">


        <div className="d-flex justify-content-between pt-md-5 pt-lg-5">


       <div><a className="fs-2 cross-icon" href=""><i class="bi bi-x-circle"></i></a><hr className="d-md-none d-lg-none"/></div>

        <div><img className="checkout-2" src="src/images/illustration/cloth1 (8).jpg" alt="" /><hr className="d-md-none d-lg-none"/></div>

        <div className="d-flex justify-content-between">
            <p className="ms-2 d-md-none d-lg-none">Product:</p>
            <p className="me-2">Black Bomber Jacket</p>
        </div><hr className="d-md-none d-lg-none"/>

        <div><p className="d-md-none d-lg-none">Quantity:</p><hr className="d-md-none d-lg-none" /></div>

        <div className="d-flex justify-content-between">
            <p className="ms-2 d-md-none d-lg-none">Subtotal:</p>
            <p className="me-2">$155.00</p>
        </div><hr className="d-md-none d-lg-none"/>

        </div>



        <div className="d-md-flex justify-content-between pt-md-5 pt-lg-5 mb-md-3">

       <div> <a className="fs-2 cross-icon" href=""><i class="bi bi-x-circle"></i></a><hr className="d-md-none d-lg-none"/></div>

       <div> <img className="checkout-1" src="src/images/illustration/cloth1 (1).jpg" alt="" /><hr className="d-md-none d-lg-none"/></div>

        
        <div className="d-flex justify-content-between">
            <p className="ms-2 d-md-none d-lg-none">Product:</p>
            <p className="me-2 ms-md-5 ms-lg-5">Badge Embroidery Polo Shirt</p>
        </div><hr className="d-md-none d-lg-none"/>

       <div> <p className="d-md-none d-lg-none">Quantity:</p><hr className="d-md-none d-lg-none" /></div>

        <div className="d-flex justify-content-between">
            <p className="ms-2 d-md-none d-lg-none">Subtotal:</p>
            <p className="me-2 ms-md-5">$155.00</p>
        </div><hr />
        </div>

       <div className="d-md-flex d-lg-flex">
        <input className="checkout-input ms-3 ps-2" type="text" placeholder="Coupon code" />
        <button className="checkout-btn rounded-1" type="button">APPLY COUPON</button><hr />

        <button className="checkout-btn2 ms-3" type="button">UPDATE CART</button>
        </div>


    </div>

   



    {/* cart tools */}

    <div className="cart-tools ms-3 mt-4 mb-5 mt-lg-5">

        <p className="totals text-center fs-6 pt-2">Cart totals</p><hr />

        <div className="d-flex justify-content-between">
            <p className="ms-md-3">Subtotal:</p>
            <p className="me-md-3">$305.00</p>
        </div><hr />

        <div className="d-flex justify-content-between gap-5">
            <p className="ms-md-3">Shipping:</p>
            <p className="me-md-3">Enter your Address To View Shipping Options.</p>
        </div><hr />

        <div className="d-flex justify-content-between">
            <p className="ms-md-3">Total:</p>
            <p className="me-md-3">$305.00</p>
        </div><hr />

        <Link to={"/bill"}><button className="check-btn ms-3" type="button">PROCEED TO CHECKOUT</button></Link>
         
    </div>

    </div>

    </section>

        </>
     )
    }
    export default Checkout;