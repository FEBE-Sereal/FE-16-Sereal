import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/img/RightArrow.png";
import { homesServices } from "../../services/homesServices";
import "../../assets/css/style-home.css";

function Home() {
  const [listHomes, setListHomes] = useState([]);
  useEffect(() => {
    homesServices.getHomesList().then((response) => {
      setListHomes(response);
    });
  }, []);

  console.log(listHomes);

  return (
    <>
      {/* <!-- Banner --> */}
      <section>
        <div className="main-image">
          <div className="row">
            <div className="con-text col-md-12 text-center col-sm-12 my-5 d-block">
              <h1 id="#try-move">
                KEMBANGKAN TALENTA <span>SENIMU</span> BERSAMA SEREAL
              </h1>
              <p>Belajar digital art, melukis, menari, musik, dan teater kini tidak lagi susah. Terutama untuk kalian kaum pelajar yang ingin mengembangkan talentanya.</p>
              <Link to="/explore" className="btn btn-explore px-3 my-3">
                Explore Kelas
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End--> */}

      {/* <!-- General Class --> */}
      <section>
        <div className="ex-seni text-center my-5">
          <h2>Explore Pilihan Seni Sesuai Minat mu</h2>
        </div>
        <nav>
          <div className="d-none d-md-flex nav nav-tabs justify-content-center my-5" id="nav-tab" role="tablist">
            <button id="btn-melukis" className="nav-link active" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Melukis
            </button>
            <button id="btn-digital-art" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Digital Art
            </button>
            <button id="btn-teater" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Teater
            </button>
            <button id="btn-menari" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Menari
            </button>
          </div>
        </nav>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
          <div className="container">
            <div className="carousel-inner">
              {/* get data from API */}
              {/* {homesServices.map((item) => (
                <div class="carousel-item my-5">
                  <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                      <img src={item.img} class="banner" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                      <h5 class="mt-3 fw-bold">{item.judul}</h5>
                      <p class="text-secondary">{item.caption}</p>
                      <Link to="#" class="text-decoration-none">
                        Cari tahu lebih lanjut{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>

          <button className="d-sm-none carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <img src={RightArrow} alt="" className="rotate-img" />
          </button>
          <button className="d-sm-none carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </section>
      {/* <!-- General Class End--> */}
    </>
  );
}

export default Home;
