import React, { Component } from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal'
class App extends Component {
  state = {
    list: [
      {'id': 1, 'content' : 'Eat Breakfast', 'isDone': false},
      {'id': 2, 'content' : 'Go to School', 'isDone': true},
      {'id': 3, 'content' : 'Do some homework', 'isDone': false},
      {'id': 4, 'content' : 'Fix some bugs', 'isDone': true},
      {'id': 5, 'content' : 'Play A Game', 'isDone': true},
      {'id': 6, 'content' : 'Run in a park', 'isDone': false}
    ]
  };

  finishTask(item){
      const  listItems  = this.state.list;
      const index = listItems.indexOf(item);
      this.setState({
        list: [
          ...listItems.slice(0, index),
        {
          ...item,
          isDone: true
        },
        ...listItems.slice(index + 1)
        ]
      })  
  }

  addTask(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      text = text.trim();
      if(!text)
        return;
      const  listItems  = this.state.list;
      const id = listItems.length + 1;
      let newTask = {
        id,
        content: text,
        isDone: false
      };
      this.setState({
        list:[
          ...listItems,
          newTask
        ]
      });
    }
    //console.log(event.keyCode);
    //console.log(event.target.value);
  }

  render() {
    const {list} = this.state;
    return ([
      <Header/>,
      <ListItems list={list} finishTask={(item) => this.finishTask(item)}/>,
      <Modal addTask={(event) => this.addTask(event)}/>
    ]);
  };
}

export default App;