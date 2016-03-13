"use strict"

import React from 'react';

export default class NewTask extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }



  render(){

    return(
        <div>
            <input id="newTask" type="text" name="newTask" placeholder="Input your new task here" ></input>
            <button onClick={this.props.addNewTask}> Submit</button>
        </div>
      );
    }
}
