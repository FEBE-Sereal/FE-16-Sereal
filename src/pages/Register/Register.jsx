import { Link } from "react-router-dom";
import "../../assets/css/style-sign.css";
import RegisterCat from "../../assets/img/register_cat.png";
import google from "../../assets/img/google.png";
import React from "react";
import bg from "../../assets/img/bg-log.jpg";

function Register() {
  return (
    <>
      {/* <!-- REGISTER FORM --> */}
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <img className="d-none d-md-flex col-md-4 col-lg-6" src={bg} alt="" />

          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h1 className="judul-daftar">
                      Create Your <span>Account</span>
                    </h1>
                    <h2 className="daftar-heading mb-4">Sign Up</h2>

                    {/* <!-- Sign Up Form --> */}
                    <form id="form-floating" method="POST">
                      <div className="form-floating mb-3">
                        <input type="text" required className="form-control" id="name" name="name" placeholder="Your Name" />
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" required className="form-control" id="email" name="email" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" required className="form-control" id="password" name="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-lg btn-signUp text-uppercase fw-bold mb-2" type="submit">
                          Sign up
                        </button>
                        <div className="text-center">
                          <span>
                            Sudah memiliki akun?{" "}
                            <Link to="/login" className="d-inline text-decoration-none">
                              Login
                            </Link>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
