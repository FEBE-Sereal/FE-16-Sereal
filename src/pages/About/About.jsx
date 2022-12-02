/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import profile from "../../assets/img/profile.png";
import profile2 from "../../assets/img/profile2.png";
import zidd from "../../assets/img/zidd.png";
import uqq from "../../assets/img/uqq.png";
import zii from "../../assets/img/zii.png";
import sill from "../../assets/img/sill.png";
import riqq from "../../assets/img/riqq.png";

import "../../assets/css/style-about.css";

function About() {
  let message = `Berdiri pada tahun 2022 oleh sekelompok remaja yang berasal dari berbagai daerah di Indonesia dan bercita-cita untuk membangun sebuah platform pembelajaran digital di bidang seni yang dapat digunakan oleh seluruh pemuda khususnya di Indonesia.`;

  //   let messageabout = `Kami menyadari bahwa potensi pemuda dalam mengembangkan bakatnya di bidang seni sangatlah tinggi, sehingga kami menciptakan sebuah media platform sebagai medium belajar mereka.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">THE TEAM BEHIND SEREAL</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={riqq} className="team-img" alt="pic" />
              <h3>ATH THAARIQ ADZ ZYAD</h3>
              <div className="team-info">
                <p>Team Frontend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <a href="https://www.instagram.com/xameusgram/" className="instagram">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/xamp1" className="github">
                    <BsGithub />
                  </a>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/ath-thaariq-adz-zyad-246426243" className="linkedin">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={zidd} className="team-img" alt="pic" />

              <h3>YAZID RIDWAN</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <a href="https://www.instagram.com/yazidrr_11/" className="instagram">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/yazidr1" className="github">
                    <BsGithub />
                  </a>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/yazidridwan/" className="linkedin">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={zii} className="team-img" alt="pic" />

              <h3>UZI FAUZIAH AZHARI</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <a href="https://www.instagram.com/zii0_0fa/" className="instagram">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Woozi05" className="github">
                    <BsGithub />
                  </a>
                </li>

                <li>
                  <Link to="#" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/uzi-fauziah-azhari-57b73b151/" className="linkedin">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={uqq} className="team-img" alt="pic" />

              <h3>FARAUQ RIFKY</h3>

              <div className="team-info">
                <p>Team Frontend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <a href="https://www.instagram.com/farauqq/" className="instagram">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/farauqq" className="github">
                    <BsGithub />
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/farauqq" className="twitter">
                    <BsTwitter />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/farauq-rifky-dwi-arya-maulana-507844190/" className="linkedin">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={sill} className="team-img" alt="pic" />

              <h3>MUHAMMAD ARSIL ALHABSY</h3>

              <div className="team-info">
                <p>Team Backend</p>
              </div>

              <ul className="team-icon">
                <li>
                  <a href="https://www.instagram.com/m19y__/" className="instagram">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/muhammadarsilalhabsy" className="github">
                    <BsGithub />
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/m19y_" className="twitter">
                    <BsTwitter />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/muhammad-arsil-alhabsy-7992b2218/" className="linkedin">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={profile2} className="team-img" alt="pic" />

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
