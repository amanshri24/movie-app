import axios from "axios";

//global method for call the api thoughout the application

const BASE_URL = "https://api.themoviedb.org/3";
// const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;
const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYxNmVhNTBkMDE0MDFmNmU5ZjlmMWJiMWQxMGNmNyIsInN1YiI6IjY1MzNhNDViNDJkODM3MDBhY2UwYzZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HPU4HrdhvGu0BbbZ62r9e30RO6zFHGzKaGW0inPUFsI";

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
