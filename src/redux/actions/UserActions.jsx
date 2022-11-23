import axios from "axios";
export const REGISTER_UP = "REGISTER_UP";
export const SIGN_IN = "SIGN_IN";
export const Masukberhasil = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};
export const Daftarberhasil = (user) => {
  return {
    type: REGISTER_UP,
    user,
  };
};
export const Signup = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://63556474483f5d2df3b3820f.mockapi.io");
    dispatch(Daftarberhasil(response.data));
  };
};

export const Signin = (user) => {
  return async (dispatch) => {
    const response = await axios.get("https://63556474483f5d2df3b3820f.mockapi.io");
    dispatch(Masukberhasil(response.data));
  };
};
