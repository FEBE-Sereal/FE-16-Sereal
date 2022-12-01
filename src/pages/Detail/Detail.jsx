import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import bgmateri from "../../assets/img/bg-materi.png";
import "../../assets/css/style.css";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import { detailServices } from "../../services/detailServices";

const Detail = () => {
  const [detail, setDetail] = useState();

  const params = useParams();
  useEffect(() => {
    detailServices.getDetailList(params._id).then((response) => {
      setDetail(response.data);
      // console.log(response.data);
    });
  }, []);
  const [tabMateri, setTabMateri] = useState(0);

  return (
    <>
      <section>
        <div className="main-imagedetail">
          <div className="row">
            <div className="detail-text col-md-12 text-center col-sm-12 my-5 d-block">
              <h3 id="#try-move">{detail?.title}</h3>
              <p style={{ color: "#fff" }}>{detail?.description}</p>
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
                {detail?.materi.map((item_materi, index) => (
                  <>
                    <button type="button" onClick={() => setTabMateri(index)} className="btn1 list-group-item list-group-item-action">
                      {`${index + 1}. ${item_materi.title}`}
                    </button>
                    <br />
                  </>
                ))}
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div id="materi">
              {detail?.materi.map((item_materi, index) => (
                <>
                  <div style={{ display: index === tabMateri ? "block" : "none" }}>
                    <h3 style={{ color: "#fb9847" }}>{item_materi.title}</h3>
                    {item_materi.content.video.map((contentVideo) => (
                      <ReactPlayer url={contentVideo} width="100%" />
                      // <Iframe url={contentVideo} width="640px" height="320px" id="" className="" display="block" position="relative" />
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
