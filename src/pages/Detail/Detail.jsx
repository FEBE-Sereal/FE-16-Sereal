import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgmateri from "../../assets/img/bg-materi.png";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";
import ReactPlayer from "react-player";
import { detailServices } from "../../services/detailServices";

const Detail = () => {
  // const [listDetail, setListDetail] = useState([]);
  // useEffect(() => {
  //   detailServices.getDetailList().then((response) => {
  //     setListDetail(response);
  //   });
  // }, []);

  // console.log(listDetail);

  const params = useParams();

  const [tabMateri, setTabMateri] = useState();

  const dataDummy = {
    _id: "6380b4b5d6b7662aea7b3831",
    title: "GIMP Dasar",
    description: "Dikelas ini kamu akan belajar tentang dasar-dasar menggunakan tools edit gambar yang open source yaitu GIMP",
    materi: [
      {
        content: {
          image: ["https://i.ibb.co/nPMcdBD/Screenshot-from-2022-11-18-07-36-26.png"],
          video: ["https://www.youtube.com/watch?v=Rv36bite-YI&list=PLncito6z-hVHbm_Zsv7iJSRhi4fz-B5fp&index=2"],
        },
        _id: "6380a0dc3626180afa3f9996",
        title: "Pendahuluan",
        body: "<ol> <li>Apa itu GIMP</li> <p>Dibandingkan menggunakan Tools edit gambar yang berbayar seperti <i>Adobe Photoshop</i> , <i>CorelDraw</i> , dan lain lain. Untuk anda yang kaum gratisan bisa mencoba alternatif lain yang tidak kalah keren daripada software edit gambar yang berbayar tadi. <b><i>GNU Image Manipulation Program</i></b> atau lebih sering dikenal dengan sebutan <b>GIMP</b> merupakan perangkat lunak edit gambar (G R A T I S). <b>GIMP</b> sendiri dapat dimanfaatkan untuk membuat desain grafik dan logo, mengubah resolusi dan memotong foto, mengubah warna, menggabungkan berbagai macam gambar atau mengkonversi berbagai macam jenis berkas gambar dan masih banyak lagi. Grafik yang dihasilkan oleh GIMP disimpan dengan format XCF dan bisa diekspor ke berbagai format gambar seperti bmp, jpg, gif, pdf, png, svg, tiff, dan masih banyak lagi yang lainnya. Dengan banyaknya plugin yang memudahkan dalam mengelolah gambar/ <i>image </i> dengan cepat, anda bisa sah sah sah sah tugas selesai…. Selain itu juga Developer GIMP selalu menambahkan teknologi terbaru setiap updatenya untuk selalu mengikuti perkembangan teknologi, so jangan khawatir untuk belajar GIMP...</p> <li>GIMP Interface (tampilan)</li> <p> Silahkan menonton video di atas dengan seksama, harapannya setelah menonton video di atas kamu bisa mengetahui interface dasar dari GIMP dan kamu juga bisa mengkostumisasi tampilan dengan kenyamanan kamu sendiri. </p> </ol>",
        status: true,
      },
      {
        content: {
          image: [],
          video: ["https://www.youtube.com/watch?v=zhw58HI2STM&list=PLncito6z-hVHbm_Zsv7iJSRhi4fz-B5fp&index=3"],
        },
        _id: "6380a3ab3626180afa3f9999",
        title: "Move Tools",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu mampu memindahkan object-object meggunakan move tool.</p>",
        status: true,
      },
      {
        content: {
          image: [],
          video: ["https://www.youtube.com/watch?v=zhw58HI2STM&list=PLncito6z-hVHbm_Zsv7iJSRhi4fz-B5fp&index=3"],
        },
        _id: "6380a3ed3626180afa3f999c",
        title: "Alingment Tools",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu mampu membedakan fungsi-fungsi alingment tools, mengatur jarak distribusi,center dan lainn sebagainya.</p>",
        status: true,
      },
      {
        content: {
          image: [],
          video: ["https://www.youtube.com/watch?v=riValOYXiGI&list=PLncito6z-hVHbm_Zsv7iJSRhi4fz-B5fp&index=5"],
        },
        _id: "6380af663626180afa3f999f",
        title: "Selection Tools",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu mampu membedakan menyeleksi gambar atau object, mengatur ketebalan seleksi mengerti fungsi fungsi tambahan dari selection tool.</p>",
        status: true,
      },
      {
        content: {
          image: [],
          video: ["https://www.youtube.com/watch?v=k7SrQ-_-8zc"],
        },
        _id: "6380afcc3626180afa3f99a2",
        title: "Text Tools",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu dapat memodifikasi text, mengatur jarak, tata letak dan sebagainya.</p>",
        status: true,
      },
      {
        content: {
          image: [],
          video: ["https://www.youtube.com/watch?v=8X1kiGvOTYg&list=PLncito6z-hVHbm_Zsv7iJSRhi4fz-B5fp&index=5&ab_channel=AbuZaidTutorial"],
        },
        _id: "6380b02b3626180afa3f99a5",
        title: "Exercise 1: Membuat stroke pada text",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu mampu membuat stroke dengan 3 metode yang sudah dijelaskan. Jangan cuman di tonton yah deck, di peraktekin juga biar jago!.</p>",
        status: true,
      },
      {
        content: {
          image: ["https://i.ibb.co/MMpscgh/sereal.png"],
          video: ["https://www.youtube.com/watch?v=kOBUiBnLBKc&ab_channel=YellowDigitalTutorials"],
        },
        _id: "6380b1aa3626180afa3f99a8",
        title: "Exercise 2: Membuat text 3D",
        body: "<p>Silahkan menonton video diatas dengan seksama, harapannnya setelah menonton vidoe diatas kamu mampu membuat text dengan stroke menggunakan nama kamu sendiri. Kembangkan lagi imajinasi kamu dengan warna kesukaanmu. Font yang dipakai <a href='https://fonts.google.com/specimen/Mochiy+Pop+P+One?query=mochi'> mochi</a> . Jika kamu mau fontnya berbeda silahkan mencari font sendiri di google yah deck! Link untuk menari font keren. Contoh punya sereal.</p><ul><li>Contoh punya sereal</li></ul>",
        status: true,
      },
    ],
    categories: [
      {
        _id: "6379cfc52060cf8b6e18e922",
        name: "Digital art",
      },
    ],
    level: "Pemula",
    status: true,
    __v: 0,
    image: "https://i.ibb.co/RY1dmds/logo-kelas-gimp.png",
  };

  useEffect(() => {
    console.log(params._id);
  }, []);

  return (
    <>
      {/* <!-- Banner Start --> */}
      <section className="overlay">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bgmateri} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>{dataDummy.title}</h3>
              <p>{dataDummy.description}</p>
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
                {dataDummy.materi.map((item_materi, index) => (
                  <>
                    <button type="button" onClick={() => setTabMateri(index)} className="btn1 list-group-item list-group-item-action">
                      {`${index + 1}. ${item_materi.title}`}
                    </button>
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div id="materi">
              {dataDummy.materi.map((item_materi, index) => (
                <>
                  <div style={{ display: index === tabMateri ? "block" : "none" }}>
                    <h3 style={{ color: "#fb9847" }}>{item_materi.title}</h3>
                    {item_materi.content.video.map((contentVideo) => (
                      <ReactPlayer url={contentVideo} width="100%" />
                    ))}
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: item_materi.body }} />
                    {item_materi.content.image.map((contentImage) => (
                      <img src={contentImage} alt="" width="100%" />
                    ))}
                    <br />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Materi End --> */}
    </>
  );
};

export default Detail;
