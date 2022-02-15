import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  let places = axios
    .request({
      method: "GET",
      url: `https://travel-advisor.p.rapidapi.com/${}/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "9a9ecd5f2bmsh952a57bb649799ep1b9abejsnee36cb6489ad",
      },
    })
    .then(function (response) {
      console.log(response.data);
      return response.data?.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return places;
};
