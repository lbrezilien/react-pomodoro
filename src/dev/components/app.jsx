import React from 'react';
import AllTasks from './tasks/allTasks.jsx'
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
        <div>
        <AllTasks />
        </div>
    );
  }
}
