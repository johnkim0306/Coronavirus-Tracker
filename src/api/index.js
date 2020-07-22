import axios from 'axios';

const url = 'https://api.covid19api.com';


export const fetchData = async (country)  => {

    let changeableUrl = 'https://api.covid19api.com/summary';

    if (country) {
      changeableUrl = `${url}/live/country/${country}`;
    }

    // `${url}/live/country/${country}/status/confirmed`;


    //https://api.covid19api.com/live/country/south-africa


    try {
        const { data: { Global, Date} } = await axios.get(changeableUrl);
        return {Global, Date}
    }
    catch (error) {
        return error;
    }

}

export const fetchCountries = async () => {
    try {
      const {data} = await axios.get(`${url}/countries`);
      
      console.log("Hi")
      console.log(data)
      //return data;
      return data.map((country) => country.Country);
  
    } catch (error) {
      return error;
    }
  };

  //const { data: { countries } } = await axios.get(`${url}/countries`);
  //    
  //    
  //console.log(countries)
  //return countries.map((country) => country.name);