import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer =()=>{
     return(
        <>
     <section className="footer">


    <div className="row">
    <div className="col-12 col-md-6 col-lg-3">
        <h2 className="text-white footer-h2 pt-4 ms-3 mt-lg-3 ">AMADEA</h2>
     <p className="footer-p ms-3 mt-3 me-2">Amadea Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine.</p>

    <div className="d-flex">
     <a className="footer-icons1" href=""><i class="bi bi-twitter"></i></a>
     <a className="footer-icons2 " href=""><i class="bi bi-instagram"></i></a>
     <a className="footer-icons3" href=""><i class="bi bi-facebook"></i></a>
     <a className="footer-icons4" href=""><i class="bi bi-google"></i></a>
     <a className="footer-icons5" href=""><i class="bi bi-linkedin"></i></a>
     </div>
     </div>



     <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white ms-2 mt-md-5">MY ACCOUNT</h5>

        <ul className="nav-link ms-2 mt-5">
 <li className="footer-li list-style-type-none">Contact Us</li><hr className="footer-li"/>
 <li className="footer-li">Services</li><hr className="footer-li"/>
 <li className="footer-li">F.A.Q</li><hr className="footer-li"/>
 <li className="footer-li">Portfolio</li><hr className="footer-li"/>
 <li className="footer-li">Pypography</li><hr className="footer-li"/>
        </ul>
     </div>


     <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white ms-2 mt-5">INFORMATION</h5>

        <ul className="nav-link ms-2 mt-5">
 <li className="footer-li list-style-type-none">About Us</li><hr className="footer-li"/>
 <li className="footer-li">Delivery Information</li><hr className="footer-li"/>
 <li className="footer-li">Privacy Policy</li><hr className="footer-li"/>
 <li className="footer-li">Terms & Conditions</li><hr className="footer-li"/>
 <li className="footer-li">Site Map</li><hr className="footer-li"/>
        </ul>
     </div>


     <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white ms-2 mt-5">PRODUCT TAGS</h5>


       <div className="d-flex gap-2 ms-2 mt-4 mb-2">
       <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-01</div>
        <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-02</div>
        <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-03</div>
       </div>
       
        <div className="d-flex gap-2 ms-2">
        <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-04</div>
        <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-05</div>
        <div className="tag-1 text-white rounded-2 text-center pt-1">Tag-06</div>
        </div>

        

     </div>

    </div>

    <p className="copyright text-center ms-4 me-4 mt-5">© Copyright 2024 <span className="copyright-amadea">Amadea</span> - All Rights Reserved - Powered by WooVina Theme.</p>


     </section>

      
     
      
        </>
     )
    }

    export default Footer;