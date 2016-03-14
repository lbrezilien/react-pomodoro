"use strict"

import React from 'react';

export default class Item extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }



  render(){

    return(
        <li onClick={this.props.setItem}>
          {this.props.title}
        </li>
      );
    }
}
