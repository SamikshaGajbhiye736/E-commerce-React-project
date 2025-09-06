import React from "react";
import { Link } from "react-router-dom";
import './bill.css';

const Bill =()=>{
     return(
        <>
        <section>

        <div className="shop-img mt-3">
        <p className="text-center text-white pt-5">Home^ <span className="blog-p">Checkout</span></p>
        </div>


        <div className="d-lg-flex bill-main">

        <div className="bill-1 ms-3 mt-5 mb-5">

<div className="ps-3 pt-3 d-md-flex d-lg-flex justify-content-between ms-md-5 me-md-5">
    <p>BILLING DETAILS</p>
    <p>Returning Customer? <span className="text-danger">Click Here To Login</span></p>
</div><hr />

<div className="d-md-flex d-lg-flex">
<div className="mt-md-4">
<p className="ms-3">First name <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>

<div className="ms-md-3">
<p className="ms-3 mt-4">Last name <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>
</div>



<div className="d-md-flex d-lg-flex">
<div>
<p className="ms-3 mt-4">Company name(optional)</p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>

<div className="ms-md-3">
<p className="ms-3 mt-4">Country/Region <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1 ps-2" type="text" placeholder="United Kingdom(UK)" />
</div>
</div>




<div className="d-md-flex d-lg-flex">
<div>
<p className="ms-3 mt-4">Street address <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1 ps-2" type="text" placeholder="House number and street name"/>
</div>

<div className="mt-md-3 ms-md-3">
<input className="bill-input ms-3 mt-5 rounded-1 ps-2" type="text" placeholder="Apartment, suit, unit, etc."/>
</div>
</div>

<div className="d-md-flex d-lg-flex mt-md-4">
<div>
<p className="ms-3">Town/City <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>

<div className="ms-md-3">
<p className="ms-3">Country (optional) <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>
</div>



<div className="d-md-flex d-lg-flex">
<div>
<p className="ms-3">Postcode <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>

<div className="ms-md-3">
<p className="ms-3">Phone <span className="text-danger">*</span></p>
<input className="bill-input ms-3 rounded-1" type="text" />
</div>
</div>

<p className="ms-3">Email address <span className="text-danger">*</span></p>
<input className="bill-input-email ms-3 rounded-1" type="text" />


<p className="ms-3 mt-5 fw-bold">SHIP TO A DIFFERENT ADDRESS</p>

<p className="text-secondary ms-3 mt-4">Order notes (optional)</p>

<div className="bill-shortbox ms-3 rounded-1">
 <p className="text-secondary ms-3 pt-1 ">Notes about your order, e.g. special notes for delivery</p>
</div>

</div>


<div className="bill-2 ms-3 mb-5 mt-lg-5">
<div className="d-md-flex d-lg-flex justify-content-between">
<p className="ms-3 mt-3 ms-md-4">YOUR ORDER</p>
<p className="ms-3 pt-3">Have a coupon? <span className="text-danger">Click here to enter your code</span></p>
<hr />
</div>

<div className="bill-3 ms-3 ms-lg-4">

    <div className="d-flex justify-content-between pt-4">
        <p className="ms-3 fs-5">PRODUCT</p>
        <p className="me-3 fs-5">SUBTOTAL</p>
    </div><hr />

    <div className="d-flex justify-content-between">
        <p className="text-secondary ms-3">Black <br className="d-md-none d-lg-flex"/> Bomber <br className="d-md-none d-lg-flex"/> Jacket x 1</p>
        <p className="text-secondary me-3">$155.00</p>
    </div><hr />

    <div className="d-flex justify-content-between">
        <p className="text-secondary ms-3">Black <br className="d-md-none d-lg-flex"/> Embroidery <br className="d-md-none d-lg-flex"/> Polo Shirt</p>
        <p className="text-secondary me-3">$150.00</p>
    </div><hr />

    <div className="d-flex justify-content-between">
        <p className="text-secondary ms-3 text-dark">Subtotal</p>
        <p className="text-secondary me-3">$305.00</p>
    </div><hr />

    <div className="d-flex justify-content-between">
        <p className="text-secondary ms-3 text-dark">Shipping</p>
        <p className="text-secondary me-3">Enter <br className="d-md-none d-lg-flex"/> Your <br className="d-md-none d-lg-flex"/> Address</p>
    </div><hr />

    <div className="d-flex justify-content-between">
        <p className="text-secondary ms-3 text-dark">Total</p>
        <p className="text-secondary me-3">$305.00</p>
    </div>
    

</div>


<div className="bill-4 ms-3 mt-5">
    <p className="text-dark text-center fs-5 pt-4">Cash on delivery</p>

    <input className="bill-input2 ms-3" type="text" placeholder="pay with cash upon delivery." />

    <div className="">
    <p className="fw-bold text-center mt-3">PayPal</p>
    <p className="fw-bold text-center">What is PayPal?</p>
    </div>
    
</div>

<Link to={"/thankyou"}><button className="bill-btn ms-3 bg-dark rounded-1 mt-4 text-white" type="button">PLACE ORDER</button></Link>

</div>

        </div>

        </section>
        </>
     )
    }
    export default Bill;