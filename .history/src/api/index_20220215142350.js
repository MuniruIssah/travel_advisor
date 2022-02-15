import axios from "axios";

const options = ;
export const getPlacesData = async (sw,ne) => {
  let places = axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data?.data;
    })
    .catch(function (error) {
      console.error(error);
    });


  return places;
};
