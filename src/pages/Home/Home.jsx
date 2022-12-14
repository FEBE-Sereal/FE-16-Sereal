import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardHome from "../../components/CardHome/cardHome";
import { homeServices } from "../../services/homeServices";

const myHomeStyle = {
  color: "#FFFF",
  backgroundColor: "#fb9847",
  borderRadius: "0.25rem",
};

const Home = () => {
  const [home, setHome] = useState([]);

  const getDataHome = () => {
    homeServices.getHomeList().then((response) => {
      setHome(response.data);
    });
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
              <p>
                Belajar digital art, melukis, menari, musik, dan teater kini
                tidak lagi susah. Terutama untuk kalian kaum pelajar yang ingin
                mengembangkan talentanya.
              </p>
              <Link
                to="/explore"
                className="btn btn-exp px-3 my-3"
                style={myHomeStyle}
              >
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
          <h2>Explore Pilihan Seni Sesuai Minatmu</h2>
        </div>
        <div className="container">
          <div id="homes">
            {home.map((item) => (
              // console.log(item.id)
              <CardHome
                id={item.id}
                img={item.image}
                judul={item.title}
                caption={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- General Class End--> */}
    </>
  );
};

export default Home;