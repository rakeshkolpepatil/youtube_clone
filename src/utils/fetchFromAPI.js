import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Key': '0d52a58a7fmsh07a8c4132623fcfp109e3djsnbfa21168c9d3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}