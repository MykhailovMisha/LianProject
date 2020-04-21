import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Charts from './Components/Chart/Charts';
import styles from './App.module.css';
import { fetchData } from './api';
import covid from './images/covid.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData,});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country: country});

  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <a><img className={styles.image}src={covid} alt='COVID-19'/></a>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App