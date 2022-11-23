import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";
import soon from "../../assets/img/cmingsoon.png";

function Gallery() {
  return (
    <>
      <div className="container text-center">
        <h1 className="fw-bold">Something Awesome Is Coming Soon!</h1>
        <p className="text-secondary">It's going to be amazing! For now, you can check our class</p>
        <Link to="/explore" className="btn btn-join px-3 py-2">
          Go to class
        </Link>
      </div>
      {/* <!-- Gallery --> */}
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img src={soon} className="w-100 shadow-1-strong rounded mb-4" alt="Cooming Soon" />

          {/* <img src={soon} className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" /> */}
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img src={soon} className="w-100 shadow-1-strong rounded mb-4" alt="Cooming Soon" />

          {/* <img src="http://gallery.gudskul.art/wp-content/uploads/2020/07/Publikasi-Pameran-Rusun-IG-Feed.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" /> */}
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img src={soon} className="w-100 shadow-1-strong rounded mb-4" alt="Cooming Soon" />

          {/* <img src="http://gallery.gudskul.art/wp-content/uploads/2020/07/Di-rumah-tak-berarti-melemah.jpg" className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" /> */}
        </div>
      </div>
      {/* <!-- Gallery --> */}
    </>
  );
}

export default Gallery;
