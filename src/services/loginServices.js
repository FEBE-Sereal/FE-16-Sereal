import axios from "axios";

export const loginServices = {
    login,
};

async function login(params) {

    let body = {
        email: params.email,
        password: params.password
    }

    return axios
        .post("https://sereal-be-testing.up.railway.app/login", body)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return console.log(error.message);
        });
}