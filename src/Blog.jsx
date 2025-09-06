import React from "react";
import { Link } from "react-router-dom";
import './blog.css';

const Blog =()=>{
     return(
        <>


        <section>

        <div className="shop-img mt-3">
            <h4 className="text-center text-white pt-4 pt-md-5 pt-lg-5 contact-h4">Blog Post</h4>
            <p className="text-center text-white">Home^ <span className="blog-p">Blog</span></p>
        </div>




        <section className="row row-2">
        
        <div className="col-12 col-md-6 col-lg-3">
        <div className="blog-1 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Image</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4   d-md-block d-lg-block ms-lg-5">
        <div className="blog-2 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Audio</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4  d-md-block d-lg-block girl-3">
        <div className="blog-1 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Gallery</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>



         
        <div className="col-12 col-md-6 col-lg-3">
        <div className="blog-3 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Image</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4   d-md-block d-lg-block ms-lg-5">
        <div className="blog-4 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Audio</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4  d-md-block d-lg-block girl-3">
        <div className="blog-3 ms-3 me-4 mt-3"></div>
        <p className="text-center text-dark fw-bold fs-6 mt-2">Sample Post Title With Format Gallery</p>

        <div className="d-flex gap-3">
          <p className="admin ms-3 ms-lg-5"><a className="admin-2 me-1" href=""><i class="bi bi-person"></i></a>admin</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-clock"></i></a>march 20,2023</p>
          <p className="admin"><a className="admin-2 me-1" href=""><i class="bi bi-chat"></i></a>0 comments</p>
        </div>
        </div>

       </section>
          

        </section>
        </>
     )
    }
    export default Blog;