"use strict"

import React from 'react';

export default class NewItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }



  render(){

    return(
        <div>
            <input id={"new"+this.props.type} type="text" name={"new"+this.props.type} placeholder={`Input your new ${this.props.type} here`} ></input>
            <button onClick={this.props.addNew}> Submit</button>
        </div>
      );
    }
}
