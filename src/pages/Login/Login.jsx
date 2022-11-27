import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/style-sign.css";
import bg from "../../assets/img/bg-log.jpg";
import { loginServices } from "../../services/loginServices";

const Login = () => {
  // const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(Signin(email, password));
  }, []);

  // const SubmitForm = (e) => {
  //   e.preventDefault();
  //   const cariAkun = user.find((item) => item.email === email && item.password === password);

  //   if (cariAkun) {
  //     localStorage.setItem("user", JSON.stringify(cariAkun));
  //     toast.success(" Selamat kamu berhasil login!", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       transition: Zoom,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     navigate("/home");
  //   } else {
  //     toast.error("kamu belum punya akun", {
  //       autoClose: 1000,
  //       position: "top-center",
  //       transition: Zoom,
  //     });
  //   }
  // };

  const SubmitForm = (e) => {
    e.preventDefault();

    let params = {
      email,
      password
    }

    loginServices.login(params).then((response) => {
      console.log(response)
    })
  }

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
                    <form onSubmit={SubmitForm} id="login-form" method="GET">
                      <div className="form-floating mb-3">
                        <input type="email" required className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" required className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
};

export default Login;
