'use strict'
import React from 'react';
import Pomodoro from './pomodoro.jsx'

export default class AllPomodoros extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){

    return (
        <div>
          {this.props.pomodoros.map((p)=> {
            return <Pomodoro key={this.props.pomodoros.indexOf(p)} title={p.title} />
          })}
        </div>
    );
  }
}
