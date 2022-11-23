import React from "react";
import LogoSereal from "../../assets/img/logo_sereal.png";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        {/* Section: Social media */}
        {/* Section: Links */}
        <section className="pt-2">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <a className="navbar-brand" href="#">
                  <img src={LogoSereal} alt="" height="50" />
                </a>
                <p>Cengkareng, Jakarta Barat</p>
                <p>DKI Jakarta 10270</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">HUBUNGI KAMI</h6>
                <p>
                  <i className="fas fa-phone"></i>+62 821-3456-7891
                </p>
                <p>
                  <i className="fas fa-envelope"></i>sereal@gmail.com
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Kelas</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Melukis
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Teater
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Digital Art
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Menari
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Galeri</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Siswa
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Serrum
                  </a>
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom me-5">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-youtube">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png" />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" />
              </i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">© 2022 Copyright: SEREAL.</div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default Footer;
