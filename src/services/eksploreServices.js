import React from "react";
import axios from "axios";

export const eksploreServices = {
  getExploreList,
};

async function getExploreList() {
  return axios
    .get("https://sereal-be-testing.up.railway.app/kelas")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}
