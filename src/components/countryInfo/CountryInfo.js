import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CountryInfo.css';

class CountryInfo extends Component {

    altspellings=()=>{
        const country = this.props.country;
        const getCountry = this.props.getCountry;
        if (getCountry.isClickedCountry) {
            return(
                <span>{getCountry.data.altSpellings[1]}</span>
            ) 
        }else{
            const countryLenght =country.length-1;
            const countryObject = country.find(item=> countryLenght === country.indexOf(item) )
            if (countryObject.name.altSpellings !== undefined) {
                return(
                    <span>{countryObject.name.altSpellings[1]}</span>
                ) 
            }
        }
        
    }
    currencies=()=>{
        const country = this.props.country;
        const getCountry = this.props.getCountry;
        if (getCountry.isClickedCountry) {
            return(
                <span>{getCountry.data.currencies[0].code}</span>
            )
        } else {
            const countryLenght =country.length-1;
            const countryObject = country.find(item=> countryLenght === country.indexOf(item) )
        
            if (countryObject.name.currencies !== undefined) {
                return(
                    countryObject.name.currencies.map((item,index)=>{
                        return(
                            <span key={index}>{item.code}</span>
                        )
                    })
                ) 
            }   
        }
        
    }
    borders=()=>{
        const country = this.props.country;
        const getCountry = this.props.getCountry;
        if (getCountry.isClickedCountry) {
            return(
                
                getCountry.data.borders.map((item,index)=>{
                    return(
                        <span key={index} className="mx-2">{item}</span>
                    )
                })
            )
        } else {
            const countryLenght =country.length-1;
            const countryObject = country.find(item=> countryLenght === country.indexOf(item) )
            if (countryObject.name.borders !== undefined) {
                return(
                    countryObject.name.borders.map((item,index)=>{
                        return(
                            <span key={index} className="mx-2">{item}</span>
                        )
                    })
                ) 
            }
        }
        
    }
    
    render() {
        const country = this.props.country;
        const countryLenght =country.length-1;
        const countryObject = country.find(item=> countryLenght === country.indexOf(item) )
        const getCountry = this.props.getCountry;
        
        if (getCountry.isClickedCountry) {
            return(
                <>
                    {(country.length === 0)? null :
                        <div className="card-group">
                            <div className="card">
                                <img className="flag" src={getCountry.data.flag} alt={getCountry.data.flag}/>
                                <div className="card-body">
                                <h5 className="card-title">{this.altspellings()}</h5>
                                <p className="card-text">{getCountry.data.region}</p>
                                <p className="card-text">population {getCountry.data.population}</p>
                                <p className="card-text">currencies {this.currencies()}</p>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Neighbours{this.borders()}</small>
                                </div>
                            </div>
                        </div>
                    }  
                </>
            )
            
        }else{
            return (
                <>
                {(country.length === 0)? null :
                    <div className="card-group">
                        <div className="card">
                            <img className="flag" src={countryObject.name.flag} alt={countryObject.name.flag}/>
                            <div className="card-body">
                            <h5 className="card-title">{this.altspellings()}</h5>
                            <p className="card-text">{countryObject.name.region}</p>
                            <p className="card-text">population {countryObject.name.population}</p>
                            <p className="card-text">currencies {this.currencies()}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Neighbours{this.borders()}</small>
                            </div>
                        </div>
                    </div>
                }    
                </>
            );           
        }
        
    }
}

function mapStateToProps(state) {
    return{
      country: state.countryReducer,
      getCountry: state.getCountryReducer
    }
  }
  
  export default connect(mapStateToProps,{})(CountryInfo);