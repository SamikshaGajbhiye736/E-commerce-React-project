import React from "react";
import { Link } from "react-router-dom";
import './contact.css';

const Contact =()=>{
     return(
        <>

        <section>

        <div className="shop-img mt-3">
            <h4 className="text-center text-white pt-4 pt-md-5 pt-lg-5 contact-h4">Contact Us</h4>
            <p className="text-center text-white">Home^ <span className="blog-p">Contact US</span></p>
        </div>


        <div className="d-md-flex d-lg-flex">
       
        <div className="contact-input">
            <input className="contact-name ms-2 ps-3 mt-5 rounded-1" type="text" placeholder="Name" /><br />

            <input className="contact-name ms-2 ps-3 mt-4 rounded-1" type="text" placeholder="Email" /><br />

            <input className="contact-name ms-2 ps-3 mt-4 rounded-1" type="text" placeholder="Phone" /><br />

            <input className="contact-message ms-2 ps-3 mt-4 mb-4 rounded-1" type="textarea" placeholder="Message" />


            <button className="text-center text-white contact-button ms-2" type="button">SEND MESSAGE</button>
        </div>


        <div className="contact-info">
            <h6 className="ms-2 mt-5">ADDRESS</h6>
            <p className="ms-2 text-secondary">Amadea inc.</p>
            <p className="ms-2 text-secondary">546 Little Lonsdale st</p>
            <p className="ms-2 text-secondary">Philippines</p>
            <p className="ms-2 text-secondary">PH 62058</p>

            <h6 className="ms-2 mt-5">INFORMATION</h6>
            <p className="ms-2 text-secondary">amadea@support.com</p>
            <p className="ms-2 text-secondary">+1 (800) 888 5260 52 63</p>
            <p className="ms-2 text-secondary">+1 (800) 888 5260 52 64</p>
            


            <h6 className="ms-2 mt-5">BUSINESS HOURS</h6>
            <p className="ms-2 text-secondary">Monday-Friday: 9am to 20pm</p>
            <p className="ms-2 text-secondary">Saturday:9am to 17pm</p>
            <p className="ms-2 text-secondary mb-5">Sunday:day off</p>
           

        </div>

        </div>

        </section>
        </>
     )
    }
    export default Contact;