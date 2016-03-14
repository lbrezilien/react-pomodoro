'use strict'
import React from 'react';
import NewItem from './newItem.jsx';
import Item from './item.jsx';



export default class AllTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }



  render(){


    return (
        <div>
           <NewItem list={this.props.list} type={this.props.type} addNew = {this.props.addNew.bind(this)}  />
           {this.props.list.map((task) => <Item key={task.id} title={task.title} />)}
        </div>
    );
  }
}
