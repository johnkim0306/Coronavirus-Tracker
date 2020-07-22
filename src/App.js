import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api/';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker'

class App extends React.Component {
 state = {
   data: {},
   country: '',
 }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
  }

  handleCountryChange = async (country) => {
    console.log(country);
    //fetch the data
    // set the data
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }


  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data= {data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />

      </div>
    )
  }

}

export default App;
