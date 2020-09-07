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
    return (event) => {
      //const { listItems } = this.state;
      //const index = listItems.indexOf(item);
      // this.setState({
      //   list: [
      //     ...listItems.slice(0, index),
      //   {
      //     ...item,
      //     isDone: true
      //   },
      //   ...listItems.slice(index + 1)
      //   ]
      // })  

      //In ra items từ component child được nhưng không lấy được this.state của class hiện tại
      console.log(item);
    };
  }

  render() {
    const {list} = this.state;
    return ([
      <Header/>,
      <ListItems list={list} finishTask={this.finishTask}/>,
      <Modal/>
    ]);
  };
}

export default App;