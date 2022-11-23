import React from "react";
import axios from "axios";

export const eksploreServices = {
  getExploreList,
};

async function getExploreList() {
  return axios
    .get("https://63492926a59874146b18c2bb.mockapi.io/tes/Kelas")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}
