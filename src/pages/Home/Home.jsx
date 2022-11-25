import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/img/RightArrow.png";
import { homeServices } from "../../services/homeServices";
import "../../assets/css/style-home.css";
import CardHome from "../../components/CardHome/cardHome";
import Carousel from "react-bootstrap/Carousel";
import melukis from "../../assets/img/melukis.png";
import menari from "../../assets/img/menari.png";
import musik from "../../assets/img/musik.png";
import teater from "../../assets/img/teater.png";
import digitalart from "../../assets/img/digitalart.png";

const Home = () => {
  const url = "https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/ucup";
  const [home, setHome] = useState([]);

  const getDataHome = async () => {
    const response = await fetch(url);
    const dataHome = await response.json();
    // console.log(dataArtikel);

    setHome(dataHome);
    // console.log(artikel);
  };
  useEffect(() => {
    getDataHome();
  });

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
      <section className="main pb-5">
        <div className="ex-seni text-center my-5">
          <h2>Explore Pilihan Seni Sesuai Minat mu</h2>
        </div>
        <div className="container">
          <div id="homes">
            {home.map((item) => (
              // console.log(item.id)
              <CardHome id={item.id} img={item.img} judul={item.judul} caption={item.caption} />
            ))}
          </div>
          {/* <div className="row">
            <div className="col-lg-4">
              <img className="img-fluid" src={digitalart} alt="" />
            </div>
            <div className="col-lg-8">
              <div className="title py-2">
                <h4>Membuat karya dengan teknologi</h4>
              </div>
              <div className="paragraph">
                <p>Ciptakan karya dan praktik artistik dengan teknologi digital yang membuatmu lebih ahli dalam memanfaatkan teknologi terkini dan menciptakan tren karya digital!</p>
              </div>
              <div className="more">
                <a href="/list-kelas.html" className="text-decoration-none">
                  Cari tahu lebih lanjut >
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- General Class End--> */}
    </>
  );
};

export default Home;
