import axios from "axios";

const options = {
  method: "POST",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/v2/list",
  params: { currency: "USD", units: "km", lang: "en_US" },
  headers: {
    "content-type": "application/json",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "9a9ecd5f2bmsh952a57bb649799ep1b9abejsnee36cb6489ad",
  },
  data: {
    geoId: 293928,
    partySize: 2,
    reservationTime: "2021-07-07T20:00",
    sort: "POPULARITY",
    sortOrder: "desc",
    filters: [{ id: "establishment", value: ["10591"] }],
    boundingBox: {
      northEastCorner: {
        latitude: 12.248278039408776,
        longitude: 109.1981618106365,
      },
      southWestCorner: {
        latitude: 12.243407232845051,
        longitude: 109.1921640560031,
      },
    },
    updateToken: "",
  },
};
export const getPlacesData = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
