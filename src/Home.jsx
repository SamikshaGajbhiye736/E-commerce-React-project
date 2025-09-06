import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home =()=>{
     return(
        <>
        <section>

            <div id="example" className="carousel carousel-slide" data-bs-ride="carousel">
                <div className="carousel-inner">

        <div className="slide-1 mt-2 carousel-item active">
         <div className="slide-first">
           <h3 className="text-center text-white fw-light pt-5 fs-2 fs-md-2">-50% Clearance Sales</h3>
           <h2 className="text-center text-white  mt-4 fw-bold mans">MAN'S COLLECTION</h2>
           <p className="text-center text-white ms-5 mt-4 me-5 fs-md-2">Hot & Trendy Clothes of This Season</p>
           <button className="shop-button text-center mt-3 fw-bold rounded-2" type="button">SHOP NOW</button>
           </div>
        </div>

        <div className="slide-2 mt-2 carousel-item">
            <div className="slide-second">
           <h3 className="text-center text-white off">50% OFF</h3>
           <h2 className="text-center text-white summer mt-4 ">SUMMER SALES</h2>
           <button className="shop-button text-center mt-3 fw-bold rounded-2" type="button">SHOP NOW</button>
           </div>
        </div>

        <div className="slide-3 mt-2 carousel-item">
            <div className="slide-third">
           <h3 className="text-center text-white fw-light pt-5 fs-2">SUIT UP YOURSELF</h3>
           <h2 className="text-center text-white hot mt-4 fw-bold ">HOT ACCESSORIES</h2>
           <p className="text-center text-white ms-5 mt-4 me-5">Natural Leather Quality</p>
           <button className="shop-button text-center mt-3 fw-bold rounded-2" type="button">SHOP NOW</button>
           </div>
           </div>

           </div>

           <button type="button" className="carousel-control-prev" data-bs-target="example" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
           </button>

           <button type="button" className="carousel-control-next" data-bs-target="example" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
           </button>
        
        </div>

       <div className="d-none d-md-block d-md-flex gap-4 mt-5 plane-section">
         <div className="ms-5">
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-globe"></i></a></div>
            <h6 className=" ms-md-5">FREE SHIPPING</h6>
            <p className="text-secondary me-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>

         <div>
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-airplane-fill"></i></a></div>
            <h6 className=" ms-5">FAST DELIVERY</h6>
            <p className="text-secondary me-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>

         <div>
           <div className="globe-2 rounded-circle ps-4 pt-2 ms-5 mb-3"><a className="globe" href=""><i class="bi bi-chat-fill"></i></a></div>
            <h6 className=" ms-5">CUSTOMER SUPPORT</h6>
            <p className="text-secondary me-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci tempor, viverra.</p>
         </div>
       </div>


       <div className="row container mt-5">

          <div className="cloth1 col-6 col-md-4 col-lg-3">
          <div className="cloth-img1 ms-lg-5">
            <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
          </div>
          <p className="text-center text-secondery mt-1 ms-md-4">Badge Embroidary Polo</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>

          <div className="cloth2 col-6 col-md-4 col-lg-3">
          <div className="cloth-img2 ms-2 ms-md-4">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1  ms-md-5">Black Bomber jacket</p>
          <div className="d-flex gap-2 ms-3 ms-md-5">
          <strike className="strike text-center ms-lg-5">$180.00</strike>
          <p className="text-center">$155.00</p>
          </div>
          </div>

          <div className="cloth3 col-6 col-md-4 col-lg-3">
          <div className="cloth-img3 mt-4 ms-md-5 ms-lg-1">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1  ms-md-5">Cluth Bag</p>
         <p className="text-center ms-md-5">$145.00</p>
         </div>
          

          <div className="cloth4 col-6 col-md-4 col-lg-3">
          <div className="cloth-img4 ms-2 mt-4 mt-md-5 ms-lg-1 mt-lg-1">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1 ms-md-5">Studded Bag</p>
          <div className="d-flex gap-2 ms-3">
          <strike className="strike ms-md-5 ms-lg-5">$170.00</strike>
          <p>$140.00</p>
          </div>

          </div>
             
          <div className="cloth5 col-6 col-md-4 col-lg-3  mt-2">
          <div className="cloth-img5 ms-md-4 mt-md-5 ms-lg-5">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1  ms-md-5">Pandora Bag</p>
          <div className="d-flex gap-2 ms-md-5">
          <strike className="strike ms-lg-5">$150.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          
          <div className="cloth6 col-6 col-md-4 col-lg-3 mt-2">
          <div className="cloth-img6 ms-2 ms-md-5 mt-md-5 ms-lg-4">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
          <p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
          </div>

           <div className="cloth7 col-6 col-md-4 col-lg-3 mt-2 mt-md-5  mt-lg-2 mb-md-5">
          <div className="cloth-img7 mt-md-5">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1 ms-md-5">maxi Dress</p>
          <p className="text-center ms-md-5">$180.00</p>
          </div>

          <div className="cloth8 col-6 col-md-4 col-lg-3 mt-2 mt-md-5 mt-lg-2 mb-md-5">
          <div className="cloth-img8 ms-2 ms-md-4 mt-md-5 ms-lg-1">
          <Link className="text-decoration-none" to={"/checkout"}><button className="cart-button bg-dark text-white rounded-2 d-none d-md-block d-lg-block" type="button">ADD TO CART</button></Link>
            </div> 
          <p className="text-center text-secondery mt-1 ms-md-5">Gucci Bag</p>
          <p className="text-center ms-md-5">$257.00</p>
         </div>

          </div>

        <div className="green-part mt-5 mt-md-5">
            <p className="text-center text-white pt-4 ms-4 me-4 green-p pt-md-5 ms-md-5 me-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates et nam tempora. Maiores quia aperiam laborum totam, mollitia ex.</p>
            <img className="team rounded-circle" src="src/images/illustration/team_member-01-1.jpg" alt="" />
            <p className="text-center text-white fw-bold mt-2">John Doe</p>
            <p className="text-center text-white john">HAPPY CUSTOMERS</p>
        </div>



         {/* product section */}

         {/* section 1 */}

        
        <div className="row">

        <section className="col-12 col-md-5 col-lg-2 mt-md-4 mt-lg-4">
        
        <h4 className="mt-4 ms-2">NEW PRODUCT</h4>
        <hr />

          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 ms-md-4" src="src/images/illustration/cloth1 (1).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Badge Embroidary Polo</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-4">
            <div>
       <img className="product-1 ms-2 ms-md-4" src="src/images/illustration/cloth1 (2).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Black Bomber jacket</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-4">
            <div>
       <img className="product-1 ms-2 ms-md-4" src="src/images/illustration/cloth1 (3).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
          <p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
          </div>
          </div>

         </section>

         {/* section 2 */}

         
       <section className="col-12 col-md-6 col-lg-3 ms-md-5 ms-lg-5">
       <h4 className="text-dark mt-5 ms-3">ONSALE</h4>
       <hr />

         <div className="d-flex mt-4">
            <div>
       <img className="product-1 ms-2" src="src/images/illustration/cloth1 (4).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Studded Bag</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3" src="src/images/illustration/cloth1 (5).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Maxi Dress</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3" src="src/images/illustration/cloth1 (6).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
          <p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
          </div>
          </div>

         </section>


         {/* section 3 */}

      
         <section className="col-12 col-md-6 col-lg-3">

         <h4 className="text-dark mt-5 ms-3">MOST VIEWED</h4>
         <hr />

         <div className="d-flex mt-4">
            <div>
       <img className="product-1 ms-2 ms-md-4" src="src/images/illustration/cloth1 (7).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Studded Bag</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3 ms-md-4" src="src/images/illustration/cloth1 (8).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Maxi Dress</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3 ms-md-4" src="src/images/illustration/cloth9 (1).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
          <p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
          </div>
          </div>

         </section>


         {/* section 4 */}

         <section className="col-12 col-md-6 col-lg-3 ">
         <h4 className="text-dark mt-5 ms-3">LATEST</h4>
         <hr />

         <div className="d-flex mt-4">
            <div>
       <img className="product-1 ms-2" src="src/images/illustration/cloth9 (2).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Studded Bag</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3" src="src/images/illustration/cloth9 (3).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1 ms-md-4">Maxi Dress</p>
          <div className="d-flex gap-2 ms-2 ms-md-5 ms-lg-5">
          <strike className="strike ms-lg-5">$200.00</strike>
          <p>$150.00</p>
          </div>
          </div>
          </div>


          
          <div className="d-flex mt-2">
            <div>
       <img className="product-1 ms-2 mt-3" src="src/images/illustration/cloth9 (4).jpg" alt="" />
       </div>

          <div>
          <p className="text-center text-secondery mt-1  ms-md-5">Dior Bag</p>
          <p className="text-center ms-2 ms-md-5">$30.00-$55.00</p>
          </div>
          </div>

         </section>
      
        </div>
        <hr />



        {/* Blog section */}

        <h2 className="text-center mt-4 fw-bold">LATEST BLOGS</h2>

        <section className="row row-2">
        
         <div className="col-12 col-md-4 col-lg-3">
         <div className="blog-1 ms-3 me-4 mt-3"></div>
         <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Image</p>

         <div className="d-flex gap-3">
           <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
         </div>
         </div>

         <div className="col-12 col-md-4 col-lg-4  d-none d-md-block d-lg-block ms-lg-5">
         <div className="blog-2 ms-3 me-4 mt-3"></div>
         <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Audio</p>

         <div className="d-flex gap-3">
           <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
         </div>
         </div>

         <div className="col-12 col-md-4 col-lg-4 d-none d-md-block d-lg-block girl-3">
         <div className="blog-1 ms-3 me-4 mt-3"></div>
         <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Gallery</p>

         <div className="d-flex gap-3">
           <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
           <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
         </div>
         </div>

        </section>


        {/* green section */}

       <div className="green-1">
        <div className="d-md-flex">
        <div>
         <h3 className="text-white ms-3 pt-5 get ms-md-5">Subscribe us to get latest News and products</h3>
         </div>

        <div className="d-flex mt-md-4 me-md-4 subscribe-2">
         <input className="your ms-2 mt-3" type="text" placeholder="Your email address" />

         <button className="subscribe text-white mt-3" type="button">SUBSCRIBE</button>
         </div>
         </div>

       </div>


        </section>
        </>
     )


}
export default Home;