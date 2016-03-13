'use strict'
import React from 'react';
import NewTask from './newTask.jsx';
import Task from './task.jsx';



export default class AllTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }



  render(){


    return (
        <div>
           <NewTask taskList={this.props.tasks} addNewTask = {this.props.addNewTask.bind(this)}  />
           {this.props.tasks.map(function(task){
                              return <Task key={task.id} title={task.title} />
                          })}
        </div>
    );
  }
}
