import React, {Component} from 'react';

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(resp => resp.json())
    .then(resp => {
      let swVehicles = resp.results.map((vehicle) => {
        return(
          <div className="card" key={vehicle.id} style={{width: 20+ 'em'}}>
            <div className="card-block">
              <h4 className="card-title">Vehicle: {vehicle.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
              <ul className="list-group list-group-flush">Specs
                <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                <li className="list-group-item">Crew: {vehicle.crew}</li>

                <li className="list-group-item">Length: {vehicle.length}</li>
                <li className="list-group-item">Max Speed: {vehicle.max_atomosphering_speed}</li>
                <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        )
      });
      this.setState({vehicles: swVehicles});
    })
  }



  render(){
    return(
      <div className="vehicles">
        {this.state.vehicles}
      </div>
    )
  }
}
