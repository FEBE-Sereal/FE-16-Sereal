import React, { useEffect, useState } from "react";
import "../../assets/css/style-index.css";
import "../../assets/css/style-profile.css";
import { Link } from "react-router-dom";
import kitten from "../../assets/img/kitten.png";
import UIface3 from "../../assets/img/UIface3.jpg";
import UIface4 from "../../assets/img/UIface4.jpg";
import { discoverServices } from "../../services/discoverServices";

const Discover = () => {
  const [listDiscovery, setListDiscovery] = useState([]);
  useEffect(() => {
    discoverServices.getDiscoveryList().then((response) => {
      setListDiscovery(response);
    });
  }, []);

  console.log(listDiscovery);

  return (
    <>
      {/* <!-- Section 1--> */}
      <section className="section-1">
        {/* <!-- banner --> */}
        <div className="container text-start">
          <div className="row">
            <div className="tagline col-md-7 col-sm-12">
              <h1>
                KEMBANGKAN TALENTA <span>SENIMU</span> BERSAMA SEREAL
              </h1>
              <p>Belajar digital art, melukis, menari, musik, dan teater kini tidak lagi susah. Terutama untuk kalian kaum pelajar yang ingin mengembangkan talentanya.</p>
              {/* <!-- <div class="button-here"></div> --> */}
              <Link to="/register" className="btn btn-join px-3 py-2 my-3">
                Gabung Sereal
              </Link>
            </div>
            <div className="col-md-5 col-sm-12 h-25%">
              <img src={kitten} alt="kitten" />
              {/* <!-- style="width: 500px; height: 500px" --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section 2 --> */}
      <section className="section-2 me-5">
        <div className="container text-center">
          <h1 className="text-dark">Feedback from users</h1>
          <p className="text-secondary">We would like your feedback to improve our website</p>

          {/* <!-- Cards --> */}
          <div className="team row">
            <div className="col-md-4 col-12 text-center">
              {/* <!-- first --> */}
              <div className="card me-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img src={UIface3} alt="members" className="img-fluid border-radius p-4" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Uncle Roger</h3>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic velit quod, qui quo eum esse, quisquam quasi nesciunt veniam praesentium fugit magni architecto neque deserunt optio, ab accusamus assumenda obcaecati ex
                    animi expedita iusto! Sed magnam vero culpa nihil atque!
                  </p>
                  <p className="text-black-50">CEO at Serum</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* <!-- card with carousel --> */}
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="10000">
                <div className="carousel-inner">
                  <div className="carousel-item">
                    {/* Get from API */}
                    {listDiscovery.map((item) => (
                      <div className="carousel-item">
                        <div className="card d-inline-block shadow-lg">
                          <div className="card-img-top">
                            <img src={item.avatar} alt="members" className="img-fluid rounded-circle w-50 p-4" />
                          </div>
                          <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <p className="card-text text-secondary">{item.comment}</p>
                            <p className="text-black-50">{item.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <!-- second card --> */}
                    <div className="card d-inline-block shadow-lg">
                      <div className="card-img-top">
                        <img src="${item.avatar}" alt="members" className="img-fluid rounded-circle w-50 p-4" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">""</h3>
                        <p className="card-text text-secondary">""</p>
                        <p className="text-black-50">""</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* <!-- first --> */}
              <div className="card d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img src={UIface4} alt="members" className="img-fluid border-radius p-4" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Angeline</h3>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic velit quod, qui quo eum esse, quisquam quasi nesciunt veniam praesentium fugit magni architecto neque deserunt optio, ab accusamus assumenda obcaecati ex
                    animi expedita iusto! Sed magnam vero culpa nihil atque!
                  </p>
                  <p className="text-black-50">Member at Serum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
