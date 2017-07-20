import React, {Component} from 'react';

export default class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: []
    }
  }

  componentDidMount {
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json)
    .then(response => {
      let vehicles = response.results.map((vehicle) => {
        return(
          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-title">Vehicle: {vehicle.name}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
              <ul class="list-group list-group-flush">Specs
                <li class="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                <li class="list-group-item">Class: {vehicle.vehicle_class}</li>
                <li class="list-group-item">Passengers: {vehicle.passengers}</li>
                <li class="list-group-item">Crew: {vehicle.crew}</li>

                <li class="list-group-item">Length: {vehicle.length}</li>
                <li class="list-group-item">Max Speed: {vehicle.max_atomosphering_speed}</li>
                <li class="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>

              </ul>
            </div>
          </div>
        )
      })
    } )
  }


  render(){
    return(
      <div className="jumbotron">
        <h1 className="header">Star Wars</h1>
        <hr />
        <span>The Vehicles of Star Wars</span>
      </div>
    )
  }
}
