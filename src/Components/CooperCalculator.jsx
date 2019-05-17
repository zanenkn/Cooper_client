import React, { Component } from 'react';
import DisplayCooperResult from './DisplayCooperResult.jsx'
import InputFields from './InputFields.jsx'


class CooperCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      authenticated: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }


  render() {

    return (
      <>
        <InputFields
          inputChangeHandler={this.onChange.bind(this)}
        />
        
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>
    );
  }
}

export default CooperCalculator