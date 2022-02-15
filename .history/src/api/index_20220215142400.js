import axios from "axios";

const options = ;
export const getPlacesData = async (sw,ne) => {
  let places = axios
    .request({
        method: "GET",
        url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
        params: {
          bl_latitude: ,
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
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
