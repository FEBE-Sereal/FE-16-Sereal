import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgExplore from "../../assets/img/bg-explore.jpg";
import "../../assets/css/style.css";
// import "../../assets/css/style.css";
import "../../App.css";
import { eksploreServices } from "../../services/eksploreServices";

const Explore = () => {
  const [listExplore, setListExplore] = useState([]);
  useEffect(() => {
    eksploreServices.getExploreList().then((response) => {
      setListExplore(response.data);
    });
  }, []);

  const myLevelStyle = {
    textDecoration: "none",
  };

  // console.log(listExplore);
  return (
    <>
      {/* <!-- Banner/ Carousel --> */}
      <section>
        <div className="main-imagekelas">
          <div className="row">
            <div className="con-text col-md-12 text-center col-sm-12 my-5 d-block">
              <h1 id="#try-move">EXPLORE KELAS</h1>
              <p style={{ color: "#fff" }}>Ikuti dan pelajari kelas yang ada di Sereal.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner/ Carousel End --> */}
      {/* <!-- Categories --> */}
      <section className="tab-container my-4">
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color active" id="pills-all" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Semua Kelas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link nav-main-color" id="pills-melukis" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
              Melukis
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-digital" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              Digital Art
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-teater" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              Teater
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-menari" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
              Menari
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="d-flex flex-column col-centered col-11" id="card-container">
            <div className="row row-cols-1 row-cols-lg-2 mb-1" id="dua-kolom-kelas">
              {/* Get from API */}
              {listExplore.map((item) => (
                <div className="col my-3">
                  <div className="card flex-row ">
                    <img src={item.image} height="100%" className="col-centered" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between">
                        <Link to="" style={myLevelStyle}>
                          Level: {item.level}
                        </Link>
                        {/* {localStorage.getItem("token") ? (
                          <>
                          <Link to={`/detail/${item._id}`} className="btn btn-main-color" id="card-button">
                          Ikuti Kelas
                          </Link>
                          
                          </>
                        ) : (
                          
                        )} */}
                        <Link to={`/detail/${item._id}`} className="btn btn-main-color" id="card-button">
                          Ikuti Kelas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
