import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCountry,AddCountry,GetCountry } from '../../action/index';
import "./RenderCountry.css"

class RenderCountry extends Component {
  constructor(props) {
    super(props);
     this.state={
      isClickedCountry: true,
      ClickedObject: ""
     }
  }
  
    deleteCountryHandle=(id)=>{
        this.props.deleteCountry(id)
        const countryLength = this.props.country.length-1;
        const currentCountryLen=this.props.country.find(item=>countryLength === this.props.country.indexOf(item))

        if (this.state.ClickedObject === "") {
          return (this.props.GetCountry(null,false))
        }else if(this.state.ClickedObject.name === currentCountryLen.name){
          return (this.props.GetCountry(null,false))
        }else{
          return(
            this.props.GetCountry(this.state.ClickedObject.name,true)  
          )
        }  
      }

    ClickedCountry=(e)=>{
      const currentelement=this.props.country.find(item=>item.name.capital===e.target.textContent)
      this.props.GetCountry(currentelement.name,true)
      this.setState({ClickedObject: currentelement})
    }
   

    renderCountry=(e)=>{
        const {country} = this.props;
        return(
          country.map((item,index)=>{
            return(
              <li className="capitalTagLi" key={index}>
                <span onClick={this.ClickedCountry} >
                  {item.name.capital}  
                </span>
                <button onClick={()=>this.deleteCountryHandle(item.id)}><i className="fa fa-times-circle"></i></button>
                </li>
            )
          })
        )
        
      }

    render() {
        return (
            <ul className="capitalTagUl">
                {this.renderCountry()}
            </ul>
           
        );
    }
}

function mapStateToProps(state) {
    return{
      country: state.countryReducer
    }
  }
  
  export default connect(mapStateToProps,{deleteCountry,AddCountry,GetCountry})(RenderCountry);