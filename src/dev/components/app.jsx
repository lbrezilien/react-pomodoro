import React from 'react';
import AllItems from './items/allItems.jsx'
import NewItem from './items/newItem.jsx';
import Card from 'material-ui/lib/card/card';

var foTaskList ={ tasks:[
  {id:1, title: 'Go to the store', pomodoros: [{id:1, title: 'first take out the garbage', status:''}]},
  {id:2, title: 'Buy Some Milk', pomodoros: [{id:1, title: 'Completely Differnet Pomodoro', status:''}]},
  {id:3, title: 'Jump on the rain', pomodoros: []},
  {id: 4, title: 'Return Home', pomodoros: []}
]}

import AppBar from 'material-ui/lib/app-bar';



export default class App extends React.Component {
    constructor(props){
      super(props);
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
     debugger
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
                 <AppBar title="React Pomodoro" />
                  <div className="row ">
                      <NewItem list={this.state.tasks} type={"Task"} addNew = {addToTaskList.bind(this)}  />
                  </div>
                  <div className="row" style={{padding: '2%'}}>
                      <div className="col-xs-4">
                          <AllItems list={this.state.tasks}  addNew={addToTaskList} type={"Task"} setCurrentItem={this.setCurrentItem} self = {this} />
                      </div>
                      <div className="col-xs-8">
                          <AllItems list={this.state.currentTask.pomodoros}  setCurrentItem={()=>{}} self = {this}/>
                          <NewItem list={this.state.currentTask.pomodoros} type={"Pomodoro"} addNew = {addToPomodoros.bind(this)}  />
                      </div>
                  </div>
          </div>
       );
  }
}
