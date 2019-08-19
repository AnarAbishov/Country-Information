import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { AddCountry,GetCountry } from '../src/action';
import RenderCountry from './components/renderCountry/RenderCountry'
import CountryInfo from './components/countryInfo/CountryInfo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      countries: "",
    }
  }
  

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const response = res.data;
        this.setState({ countries: response });
      }).catch(function (error) {
          console.log("Error")
      })
     

  }

  getCountriesHandle=(e)=>{
    e.preventDefault();
    const {countries} = this.state;
    const country=countries.find(item=>item.capital===this.countriesName.value)
      const headerP = document.querySelector(".headerP");
      headerP.remove()
      let headerPTag = document.createElement(("p"));
      headerPTag.classList.add("headerP");
    if (country === undefined) {
      headerPTag.innerText = "Capital not found";      
      this.header.appendChild(headerPTag)
      this.countriesName.value = "";
    }else{
      this.props.AddCountry(country);
      this.props.GetCountry(null,false)


      this.header.appendChild(headerPTag)
      this.countriesName.value = "";
  
      

    }
  }

  

 

  render() {
    
    return (
      <div className="container">
          <div className="row">
        <div className="col-md-12">
          <h3 className="my-3">Country Information</h3>
          <header ref={item=>this.header = item}>
            <form onSubmit={this.getCountriesHandle}>
              <div className="formFlex">
                <input placeholder="Capital..."  type="text"  ref={item=> this.countriesName = item}/>
                <button type="submit" className="btn btn-primary mx-2">Send</button>
              </div>
            </form>
            <p className="headerP"></p>
          </header>
        </div>
        <div className="col-md-6">
            <RenderCountry/>
        </div>
        <div className="col-md-6">
            <CountryInfo/>
        </div>
      </div>
      </div>
    );
  }
}



export default connect(null,{AddCountry,GetCountry})(App);

