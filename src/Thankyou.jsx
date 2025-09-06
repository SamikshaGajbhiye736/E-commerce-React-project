import React from "react";
import { Link } from "react-router-dom";
import './thankyou.css';

const Thankyou =()=>{
     return(
        <>

      <section className="thank-main">
     
       <a className="check-icon" href=""><i class="bi bi-check-circle"></i></a>

       <p className="text-center thank mt-lg-5">Thank You!</p>
       <p className="text-center confirm">Your Order has been Confirmed.</p>


       <Link to={"/"}><button type="button" className="continue ms-4 mb-5 mt-4">CONTINUE SHOPPING</button></Link>

      </section>

        </>
     )
    }
    export default Thankyou;