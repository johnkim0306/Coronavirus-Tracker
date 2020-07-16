import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api/';
import Cards from './components/Cards/Cards';


class App extends React.Component {
 state = {
   data: {},
 }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
  }

  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data= {data}/>

      </div>
    )
  }

}

export default App;
