import React from "react";
import axios from "axios";

export const galleryServices = {
  getGalleryList,
};

async function getGalleryList() {
  return axios
    .get(`https://sereal-be-testing.up.railway.app/gallery`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}
