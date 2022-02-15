import axios from 'axios'


const URL ='https://travel-advisor.p.rapidapi.com/restaurants/v2/list-in-boundary'
const options = {
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '9a9ecd5f2bmsh952a57bb649799ep1b9abejsnee36cb6489ad'
    }
  };

const getPlacesData= async ()=>{
    try {
        const response =await axios.get(URL,options);
        return response;
    } catch (error) {
        
    }
}