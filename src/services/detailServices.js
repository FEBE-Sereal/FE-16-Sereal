import React from "react";
import axios from "axios";

export const detailServices = {
  getDetailList,
};

async function getDetailList(_id) {
  return axios
    .get("https://sereal-be-testing.up.railway.app/kelas/${_id}")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}
