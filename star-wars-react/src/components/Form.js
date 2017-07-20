import React, {Component} from 'react';

export default class Form extends Component {
  constructor(){
    super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      pilot: ""
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
    // console.log(this.state);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({pilot: this.state.name });
    console.log(this.state);
    this.setState({name: ""});
  }

  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-header">What is your name, pilot?</h2>
          <input name="name" type="text" placeholder="Enter your name" onChange={this.handleNameChange}/>
          <input type="submit" value="Submit" />

          <h2>{this.state.pilot}</h2>
        </form>
      </div>
    )
  }
}
