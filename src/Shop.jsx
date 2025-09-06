import React from "react";
import { Link } from "react-router-dom";
import './shop.css';

const Shop =()=>{
     return(
        <>
    <section>

   <div className="shop-img mt-3">
    <h4 className="text-white text-center pt-4 shop-h4 pt-md-5">Shop categories</h4>
    <p className="text-white text-center ms-2 shop-p">This is where you can browse products in this store.</p>
    <p className="text-center text-white">Home^ <span className="blog-p">Shop</span></p>
    
   </div>





   <div className="row container mt-5">

<div className="cloth1 col-6 col-md-4 col-lg-3">
<div className="cloth-img1 ms-lg-5">
  <button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
</div>
<p className="text-center text-secondery mt-1 ms-md-4">Badge Embroidary Polo</p>
<div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
<strike className="strike ms-lg-5">$200.00</strike>
<p>$150.00</p>
</div>
</div>

<div className="cloth2 col-6 col-md-4 col-lg-3">
<div className="cloth-img2 ms-2 ms-md-4">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1  ms-md-5">Black Bomber jacket</p>
<div className="d-flex gap-2 ms-3 ms-md-5">
<strike className="strike text-center ms-lg-5">$180.00</strike>
<p className="text-center">$155.00</p>
</div>
</div>

<div className="cloth3 col-6 col-md-4 col-lg-3">
<div className="cloth-img3 mt-4 ms-md-5 ms-lg-1">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1  ms-md-5">Cluth Bag</p>
<p className="text-center ms-md-5">$145.00</p>
</div>


<div className="cloth4 col-6 col-md-4 col-lg-3">
<div className="cloth-img4 ms-2 mt-4 mt-md-5 ms-lg-1 mt-lg-1">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1 ms-md-5">Studded Bag</p>
<div className="d-flex gap-2 ms-3">
<strike className="strike ms-md-5 ms-lg-5">$170.00</strike>
<p>$140.00</p>
</div>

</div>
   
<div className="cloth5 col-6 col-md-4 col-lg-3  mt-2">
<div className="cloth-img5 ms-md-4 mt-md-5 ms-lg-5">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1  ms-md-5">Pandora Bag</p>
<div className="d-flex gap-2 ms-md-5">
<strike className="strike ms-lg-5">$150.00</strike>
<p>$150.00</p>
</div>
</div>

<div className="cloth6 col-6 col-md-4 col-lg-3 mt-2">
<div className="cloth-img6 ms-2 ms-md-5 mt-md-5 ms-lg-4">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
<p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
</div>

 <div className="cloth7 col-6 col-md-4 col-lg-3 mt-2 mt-md-5  mt-lg-2 mb-md-5">
<div className="cloth-img7 mt-md-5">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1 ms-md-5">maxi Dress</p>
<p className="text-center ms-md-5">$180.00</p>
</div>

<div className="cloth8 col-6 col-md-4 col-lg-3 mt-2 mt-md-5 mt-lg-2 mb-md-5">
<div className="cloth-img8 ms-2 ms-md-4 mt-md-5 ms-lg-1">
<button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button>
  </div> 
<p className="text-center text-secondery mt-1 ms-md-5">Gucci Bag</p>
<p className="text-center ms-md-5">$257.00</p>
</div>

</div>



    </section>


        </>
     )
    }
    export default Shop;