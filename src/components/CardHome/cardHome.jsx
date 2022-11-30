import { Link } from "react-router-dom";
import "../../assets/css/style-home.css";

function cardHome(props) {
  // console.log(props);
  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-4">
          <img className="img-fluid" src={props.img} alt="" />
        </div>
        <div className="col-lg-8">
          <div className="title py-2">
            <h4 style={{ color: "#000" }}>{props.judul}</h4>
          </div>
          <div className="paragraph">
            <p style={{ color: "#6c757d" }}>{props.caption}</p>
          </div>
          <div className="more">
            <Link to="/explore" className="text-decoration-none">
              Cari tahu lebih lanjut
            </Link>
          </div>
        </div>
        {/* <hr></hr> */}
      </div>
    </>
  );
}
export default cardHome;
