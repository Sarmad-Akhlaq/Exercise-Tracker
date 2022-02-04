import React, { Component } from 'react';

class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            user: [],
        }
    }

  render() {
    return (
        <div>
            <p>You are on the Create Exercise component</p>
        </div>
    );
  }
}

export default CreateExercise;