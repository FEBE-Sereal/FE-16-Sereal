import React from "react";
import axios from "axios";

export const dashboardServices = {
  getDasboardList,
};

async function getDasboardList() {
  return axios
    .get("ttps://sereal-be-testing.up.railway.app/register")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.log(error);
    });
}
