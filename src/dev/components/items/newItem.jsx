"use strict"

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

export default class NewItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }



  render(){

    return(
        <div>
            <TextField placeholder={`Input your new ${this.props.type} here`} id={"new"+this.props.type} type="text" name={"new"+this.props.type} />
            <FloatingActionButton  primary={true} onClick={this.props.addNew}><ContentAdd />
            </FloatingActionButton>
        </div>
      );
    }
}
