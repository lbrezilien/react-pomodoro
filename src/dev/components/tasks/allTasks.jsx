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
    var addToList = (e) => {
        let position = this.state.tasks.length + 1;
        let task = { id:position, title: document.getElementById('newTask').value, pmodoros:[]} ;
        this.setState({tasks: this.state.tasks.concat(task)})
    }

    return (
        <div>
           <NewTask taskList={foTaskList} addTo = {addToList.bind(this)}  />
           {this.state.tasks.map(function(task){
                              return <li key={task.id}> {task.title} </li>
                          })}
        </div>
    );
  }
}
