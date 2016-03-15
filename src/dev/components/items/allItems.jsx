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
           {this.props.list.map((task) => {
                return  <Item key={task.id} id={task.id} title={task.title} pomodoros={task.pomodoros} self = {this.props.self} setItem={this.props.setCurrentItem} />
             })
           }
        </div>
    );
  }
}
