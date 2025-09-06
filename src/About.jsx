import React from "react";
import { Link } from "react-router-dom";
import './about.css';

const About =()=>{
     return(
        <>
        <section>
        <div className="shop-img mt-3">
      <h4 className="text-center text-white contact-h4 pt-4 pt-md-5 pt-lg-5">About Fashi</h4>
     <p className="text-center text-white">Home^ <span className="blog-p">About Us</span></p>
        </div>

         <div className="about-content">

        <div className="about-content-1">
            <h4 className="ms-2 mt-5 fw-bold">ABOUT OUR SHOP</h4>
          <p className="about-p ms-2 mt-3">Amadea Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling. And emotion are quickened. Amadea Shop is a very slick and clean e-commerce template with endless possibilities. Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>


        <div className="about-content-2">
            <h2 className="about-h2 mt-5 ms-2">5</h2>
            <p className="text-secondary ms-2">Years on Global MArket</p>

            <h2 className="about-h2 mt-4 ms-2">10</h2>
            <p className="text-secondary ms-2">Partners are Working With US</p>
        </div>
        </div>


        <h3 className="text-center fw-bold mt-5">OUR TEAM</h3>

       <div className="d-md-flex d-lg-flex mb-lg-5">

        <div>
            <div className="about-img-1"></div>
            <p className="text-center mt-4 fw-bold">JOEBY RAGPA</p>
            <p className="company text-center">CEO of Company</p>
            <p className="text-secondary text-center ms-4 me-4">Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>


        <div>
            <div className="about-img-2"></div>
            <p className="text-center mt-4 fw-bold">ALEXANDER SIMPSON</p>
            <p className="company text-center">Maeketing Specialist</p>
            <p className="text-secondary text-center ms-4 me-4">Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>

        <div>
            <div className="about-img-3"></div>
            <p className="text-center mt-4 fw-bold">MELANIE GREENFORD</p>
            <p className="company text-center">Customers Support</p>
            <p className="text-secondary text-center ms-4 me-4">Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>


        <div>
            <div className="about-img-4"></div>
            <p className="text-center mt-4 fw-bold">MARK JHONSON</p>
            <p className="company text-center">SMM Specialist</p>
            <p className="text-secondary text-center ms-4 me-4">Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
        </div>

        </div>


          {/* green part */}

        <div className="green-part mt-5 mt-md-5">
            <p className="text-center text-white pt-4 ms-4 me-4 green-p pt-md-5 ms-md-5 me-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates et nam tempora. Maiores quia aperiam laborum totam, mollitia ex.</p>
            <img className="team rounded-circle" src="src/images/illustration/team_member-01-1.jpg" alt="" />
            <p className="text-center text-white fw-bold mt-2">John Doe</p>
            <p className="text-center text-white john">HAPPY CUSTOMERS</p>
        </div>


        {/* shipping part */}

        <div className=" d-md-block d-md-flex gap-4 mt-5 plane-section mb-5">
         <div className="ms-5">
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-globe"></i></a></div>
            <h6 className=" text-center ">FREE SHIPPING</h6>
            <p className="text-secondary me-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>

         <div>
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-airplane-fill"></i></a></div>
            <h6 className=" ms-5 text-center">FAST DELIVERY</h6>
            <p className="text-secondary me-lg-5 ms-5 me-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>

         <div>
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-chat-fill"></i></a></div>
            <h6 className=" ms-5 text-center">CUSTOMER SUPPORT</h6>
            <p className="text-secondary me-lg-5 ms-5 me-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>
       </div>

        
            

        </section>
        </>
     )
    }
    export default About;