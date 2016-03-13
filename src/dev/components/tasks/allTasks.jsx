'use strict'

import React from 'react';
import NewTask from './newTask.jsx';

var foTaskList ={ tasks:[
  {id:1, title: 'Go to the store', pmodoros: []},
  {id:2, title: 'Buy Some Milk', pmodoros: []},
  {id:3, title: 'Jump on the rain', pmodoros: []},
  {id: 4, title: 'Return Home', pmodoros: []}
]}

export default class AllTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = foTaskList;
  }

  render(){

    return (
        <div>
          {this.state.tasks.map(function(task){
                              return <li key={task.id}> {task.title} </li>
                          })}

            <NewTask something={"jff"}  />
        </div>
    );
  }
}
