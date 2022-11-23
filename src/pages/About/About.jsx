/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Team1 from "../../assets/img/team1.png";

import "../../assets/css/style-about.css";

function About() {
  let message = `Berdiri pada tahun 2022 oleh sekelompok remaja yang berasal dari berbagai daerah di Indonesia dan bercita-cita untuk membangun sebuah platform pembelajaran digital di bidang seni yang dapat digunakan oleh seluruh pemuda khususnya di Indonesia.`;

  //   let messageabout = `Kami menyadari bahwa potensi pemuda dalam mengembangkan bakatnya di bidang seni sangatlah tinggi, sehingga kami menciptakan sebuah media platform sebagai medium belajar mereka.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            {/* <h2 className="section-title">About Us</h2>
            <p className="section-about">{messageabout}</p> */}

            <h2 className="section-title">The Team Behind SEREAL</h2>

            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />
              <h3>ATH THAARIQ ADZ ZYAD</h3>
              <div className="team-info">
                <p>Team Frontend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />

              <h3>YAZID RIDWAN</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />

              <h3>UZI FAUZIAH AZHARI</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />

              <h3>FARAUQ RIFKY</h3>

              <div className="team-info">
                <p>Team Frontend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />

              <h3>MUHAMMAD ARSIL ALHABSY</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={Team1} className="team-img" alt="pic" />

              <h3>AFIFAH IZZATUNISA</h3>

              <div className="team-info">
                <p>Team Frontend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <Link to="#" className="instagram">
                    <BsInstagram />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="github">
                    <BsGithub />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="#" className="linkedin">
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
