"use strict"

import React from 'react';

export default class NewTask extends React.Components {
    constructor(props){
      super(props);
      this.state = {};
    }

  render(){
    return(<input type="text" name="newTask" placeholder="Input your new task here"></input>);
  }
}
