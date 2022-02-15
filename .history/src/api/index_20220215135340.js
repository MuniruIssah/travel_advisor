import axios from 'axios'


const URL ='https://travel-advisor.p.rapidapi.com/restaurants/v2/list'
const options = {
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '9a9ecd5f2bmsh952a57bb649799ep1b9abejsnee36cb6489ad'
    }, 
  };
const data
export const getPlacesData= async ()=>{
    try {
        const {data:{data}} =await axios.post(URL,options);
        return data;
    } catch (error) {
        console.log(error)
    }
}