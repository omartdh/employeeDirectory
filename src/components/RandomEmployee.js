import React, { Component } from "react";
import Card from "./Card";

class RandomEmployee extends Component {
  state = {
    Loading: true,
    results: [],
    runderResults: []
  };

  async componentDidMount() {
    const url = 'https://randomuser.me/api/?results=10';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ results: data.results, runderResults: data.results, Loading: false })
    //console.log(data)
  }

  handleSort = event => {
    event.preventDefault();
    console.log(this.state)
    const sorted = this.state.results.sort((a, b) => {
      if (a.dob.age < b.dob.age) {
        //if age is less tahn next value then skip next value
        return -1;
      }
      if (a.dob.age > b.dob.age) {
        return 1;
      }
      return 0;
    })
    // it will take the current state and copy it into the serState
    this.setState({ ...this.state, runderResults: sorted })
  }

  handleFilter = event => {
    event.preventDefault();

  }


  render() {

    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button className="btn btn-info btn-lg m-2 center" onClick={this.handleSort}>Sort by age</button>
              <button className="btn btn-success btn-lg m-2" onClick={this.handleFilter}>Filter</button>
            </div>
          </div>
        </div>
        {this.state.Loading || !this.state.results ? (
          <div>Loading...</div>
        ) : (
            this.state.runderResults.map(user => {
              return (
                <div>
                  <div>
                    <Card
                      first={user.name.first}
                      last={user.name.last}
                      gender={user.gender}
                      src={user.picture.large}
                      age={user.dob.age}
                      email={user.email}
                      phone={user.phone}
                      city={user.location.city}
                    />
                  </div>
                </div>
              )
            }
            )
          )}
      </div>
    )
  }
}

export default RandomEmployee;
