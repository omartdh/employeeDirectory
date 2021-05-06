import React, { Component } from "react";
import Card from "./Card";

class RandomEmployee extends Component {
    state = {
      Loading: true,
      results: null
    };

    async componentDidMount() {
      const url = 'https://randomuser.me/api/';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({results: data.results[0], Loading: false})
      console.log(data)
    }


    render() {

      return(
        <div>
          {this.state.Loading || !this.state.results ? (
            <div>Loading...</div>
          ) : (
            <div>
              <div>
            <Card
              first={this.state.results.name.first}
              last={this.state.results.name.last}
              gender={this.state.results.gender}
                  src={this.state.results.picture.large}
                  age={this.state.results.dob.age}
                  email={this.state.results.email}
                  phone={this.state.results.phone}
                  city={this.state.results.location.city}
            />
              </div>
            </div>
  
          )}
        </div>
      )
    } 
  }

export default RandomEmployee;
