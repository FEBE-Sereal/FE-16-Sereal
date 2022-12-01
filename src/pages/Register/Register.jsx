import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

import "../../assets/css/style-sign.css";
import React from "react";
import bg from "../../assets/img/bg-log.jpg";

const myRegStyle = {
  color: "Black",
  borderColor: "#fb9847",
  borderRadius: "70px",
};

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitForm = async (e) => {
    e.preventDefault();
    if (name === "" && email === "" && password === "") {
      toast.error("Isi form terlebih dahulu", {
        autoClose: 1000,
        position: "top-right",
        transition: Zoom,
      });
    } else if (name === "") {
      toast.warning("Isi nama terlebih dahulu", {
        autoClose: 1000,
        position: "top-right",
        transition: Bounce,
      });
    } else if (email === "") {
      toast.warning("Isi email terlebih dahulu", {
        autoClose: 1000,
        position: "top-right",
        transition: Bounce,
      });
    } else if (password === "") {
      toast.warning("Isi password terlebih dahulu", {
        autoClose: 1000,
        position: "top-right",
        transition: Bounce,
      });
    } else if (password.length < 5) {
      toast.warning("Panjang password 6 karakter", {
        autoClose: 1000,
        position: "top-right",
        transition: Bounce,
      });

    } else {
      //Akan menyebabkan salah di login
      try {
        const user = {
          name: name,
          email: email,
          password: password,
          role: "admin",
        };
        const response = await axios.post("https://sereal-be-testing.up.railway.app/register", user);

        console.log(response);
        toast.success("Berhasil membuat akun", {
          position: "top-right",
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                    <form onSubmit={SubmitForm} id="form-floating" method="POST">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="email" name="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-lg btn-signUp text-uppercase fw-bold mb-2" type="submit" style={myRegStyle}>
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
