import React from 'react';
import AllTasks from './tasks/allTasks.jsx'
import AllPomodoros from './pomodoros/allPomodoros.jsx'

var foTaskList ={ tasks:[
  {id:1, title: 'Go to the store', pomodoros: [{title: 'first take out the garbage'}]},
  {id:2, title: 'Buy Some Milk', pomodoros: []},
  {id:3, title: 'Jump on the rain', pomodoros: []},
  {id: 4, title: 'Return Home', pomodoros: []}
]}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = foTaskList
  }



  render(){
    var addToList = (e) => {
        let position = this.state.tasks.length + 1;
        let task = { id:position, title: document.getElementById('newTask').value, pmodoros:[]} ;
        this.setState({tasks: this.state.tasks.concat(task)})
    }

  return (
          <div>
            <div style={{width: '40%', display: 'inline'}}>
              <AllTasks tasks={this.state.tasks} addNewTask={addToList} />
            </div>
            <div style={{width: '60%', display: 'inline'}}>
              <AllPomodoros pomodoros={this.state.tasks[0].pomodoros}/>
            </div>
          </div>
    );
  }
}
