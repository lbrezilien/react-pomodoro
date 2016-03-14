import React from 'react';
import AllItems from './items/allItems.jsx'

var foTaskList ={ tasks:[
  {id:1, title: 'Go to the store', pomodoros: [{id:1, title: 'first take out the garbage', status:''}]},
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
    var addToTaskList = (e) => {
        let position = this.state.tasks.length + 1;
        let task = { id:position, title: document.getElementById('newTask').value, pmodoros:[]} ;
        this.setState({tasks: this.state.tasks.concat(task)})
    }

    var addToPomodoros = (e) => {
        let position = this.state.tasks.length + 1;
        let task = { id:position, title: document.getElementById('newTask').value, pmodoros:[]} ;
        this.setState({tasks: this.state.tasks.concat(task)})
    }

  return (
          <div>
            <div style={{width: '40%', display: 'inline'}}>
              <AllItems list={this.state.tasks} addNew={addToTaskList} type={"Task"} />
            </div>
            <div style={{width: '60%', display: 'inline'}}>
              <AllItems list={this.state.tasks[0].pomodoros} addNew={addToPomodoros} type={"Pomodoro"} />

            </div>
          </div>
    );
  }
}
