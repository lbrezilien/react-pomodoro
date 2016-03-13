"use strict"

import React from 'react';

export default class Task extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }



  render(){

    return(
        <li>
          {this.props.title}
        </li>
      );
    }
}
