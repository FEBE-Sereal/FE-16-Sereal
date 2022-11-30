import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";
import CardGallery from "../../components/CardGallery/cardGallery";
import { galleryServices } from "../../services/galleryServices";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const getDataGallery = () => {
    galleryServices.getGalleryList().then((response) => {
      setGallery(response.data);
    });
  };
  useEffect(() => {
    getDataGallery();
  });

  return (
    <>
      <section className="main pb-5">
        <div className="container">
          <h1 className="p-4 text-center">Gallery Sereal</h1>
          {/* <hr className="border border-2 border-dark mx-auto w-25 bg-dark" /> */}
          <div id="videos" className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {gallery.map((item, item_content) => (
              // console.log(item)
              <CardGallery key={item.id} img={item.image} title={item.title} deskripsi={item.description} author={item.author} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
