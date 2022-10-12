import axios from 'axios';

 export const getPlacesData = async (type, sw,ne) => {
    try {
        //request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '63b2b28a46msha3090b5bddddf09p13bb69jsndb67b4d183d0',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;

    } catch (error) {
        //Handle Error
        console.error(error);
    }
}