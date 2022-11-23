import React from "react";
import "../../assets/css/style-sign.css";
import { Link } from "react-router-dom";
import google from "../../assets/img/google.png";
import LoginCat from "../../assets/img/login_cat.png";
import bg from "../../assets/img/bg-log.jpg";

function Login() {
  return (
    <>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <img className="d-none d-md-flex col-md-4 col-lg-6" src={bg} alt="" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h1 className="judul-login">
                      Welcome to <span>SEREAL</span>
                    </h1>
                    <h2 className="login-heading mb-4">Sign In</h2>

                    {/* <!-- Sign In Form --> */}
                    <form id="login-form" method="GET">
                      <div className="form-floating mb-3">
                        <input type="email" required className="form-control" id="email" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" required className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-lg btn-login text-uppercase fw-bold mb-2" type="submit">
                          Sign in
                        </button>

                        <div className="text-center">
                          <span>
                            Belum memiliki akun?{" "}
                            <Link to="/register" className="d-inline text-decoration-none">
                              Daftar
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

export default Login;
