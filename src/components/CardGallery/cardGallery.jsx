import React from "react";

function cardGallery(props) {
  //   console.log(props);
  return (
    <>
      <div className="col">
        <img src={props.img} alt="" className="w-100 mb-3" />
        <h4 className="fw-semibold">{props.title}</h4>
        <p style={{ margin: "1px" }}>Author: {props.author}</p>
        <p>Deskripsi: {props.deskripsi}</p>
      </div>
    </>
  );
}

export default cardGallery;
