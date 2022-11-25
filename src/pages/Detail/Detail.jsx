import React from "react";
import bgmateri from "../../assets/img/bg-materi.png";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";

const Detail = () => {
  return (
    <>
      {/* <!-- Banner Start --> */}
      <section className="overlay">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bgmateri} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Dasar Melukis</h3>
              <p>
                Pada kelas ini kamu akan belajar dimulai dari pengenalan tentang melukis, alat dan bahan apa saja yang harus disiapkan dan seperti apa teknik dasar menggunakan kuas. Di akhir kelas kamu diharapkan bisa membuat lukisan sesuai
                dengan kreativitasmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Materi Start --> */}
      <main className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="list-materi container border">
              <h4 className="text-center mt-3 mb-3">Materi</h4>
              <div className="list-group mb-3">
                <button type="button" className="btn1 list-group-item list-group-item-action">
                  1. Pendahuluan
                </button>
                <br />
                <button type="button" className="btn2 list-group-item list-group-item-action">
                  2. Alat dan Bahan
                </button>
                <br />
                <button type="button" className="btn3 list-group-item list-group-item-action">
                  3. Teknik Melukis
                </button>
                <br />
                <button type="button" className="btn4 list-group-item list-group-item-action">
                  4. Menyempurnakan Lukisan
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div id="materi"></div>
          </div>
        </div>
      </main>
      {/* <!-- Materi End --> */}
    </>
  );
};

export default Detail;
