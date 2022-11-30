import React from "react";
import axios from "axios";

export const homeServices = {
  getHomeList,
};

async function getHomeList() {
  return axios
    .get("https://sereal-be-testing.up.railway.app/advertising")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}
