'use strict'
import React from 'react';
import NewItem from './newItem.jsx';
import Item from './item.jsx';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import Card from 'material-ui/lib/card/card';

let SelectableList = SelectableContainerEnhance(List);



export default class AllTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }



  render(){


    return (

        <Card>
           <List  valueLink={{value: this.props.self.state.currentTask.id, requestChange: this.props.setCurrentItem}}  subheader="Pomodo/task">
               {this.props.list.map((task) => {
                    return  (<ListItem value={task.id} primaryText={task.title} key={task.id} id={task.id} title={task.title} pomodoros={task.pomodoros} self = {this.props.self} onClick={this.props.setCurrentItem.bind(this)} />)
               })}
           </List>
        </Card>
    );
  }
}
