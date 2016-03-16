import React from 'react';
import AllItems from './items/allItems.jsx'

var foTaskList ={ tasks:[
  {id:1, title: 'Go to the store', pomodoros: [{id:1, title: 'first take out the garbage', status:''}]},
  {id:2, title: 'Buy Some Milk', pomodoros: [{id:1, title: 'Completely Differnet Pomodoro', status:''}]},
  {id:3, title: 'Jump on the rain', pomodoros: []},
  {id: 4, title: 'Return Home', pomodoros: []}
]}

export default class App extends React.Component {
    constructor(props){
      super(props);
      debugger;
      if (localStorage['tasks']){
         let tasks = localStorage['tasks'];
      }else {
        localStorage.tasks = []
        let tasks = localStorage['tasks']
      }

      this.state = {tasks: foTaskList.tasks, currentTask: foTaskList.tasks[0]}
    }

    componentDidMount(){
      this.setState({tasks: this.state.tasks, currentTask: this.state.tasks[0]})
    }

   setCurrentItem() {
    let currentState = this.props.self.state;
    this.props.self.setState({
      tasks: currentState.tasks,
      currentTask: currentState.tasks[this.props.id - 1]
    })
  }


  render(){
    var addToTaskList = (e) => {
        let position = this.state.tasks.length + 1;
        let task = { id:position, title: document.getElementById('newTask').value, pomodoros:[]} ;
        this.setState({tasks: this.state.tasks.concat(task), currentTask: this.state.currentTask});
        document.getElementById('newTask').value = '';
    }

    var addToPomodoros = (e) => {
        let currentTaskIndex = this.state.tasks.indexOf(this.state.currentTask);
        let position = this.state.tasks[currentTaskIndex].pomodoros.length + 1;
        let pomodoro = { id:position, title: document.getElementById('newPomodoro').value, status: ''} ;
        let task = this.state.tasks[currentTaskIndex];
        task.pomodoros = task.pomodoros.concat(pomodoro);
        this.setState({tasks: this.state.tasks, currentTask: this.state.tasks[currentTaskIndex]});
        document.getElementById('newPomodoro').value = '';
    }


  return (

          <div>
            <div style={{width: '40%', display: 'inline'}}>
              <AllItems list={this.state.tasks}  addNew={addToTaskList} type={"Task"} setCurrentItem={this.setCurrentItem} self = {this}/>
            </div>
            <div style={{width: '60%', display: 'inline'}}>
              <AllItems list={this.state.currentTask.pomodoros} addNew={addToPomodoros} type={"Pomodoro"} setCurrentItem={()=>{}} self = {this}/>
            </div>
          </div>
    );
  }
}
