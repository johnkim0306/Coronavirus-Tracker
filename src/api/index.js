import axios from 'axios';

const url = 'https://api.covid19api.com/summary';


export const fetchData = async ()  => {
    try {
        const { data: { Global, Date} } = await axios.get(url);
        return {Global, Date}
    }
    catch (error) {
        return error;
    }

}
    