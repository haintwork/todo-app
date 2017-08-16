import React, { Component } from 'react';
import AddTodoForm  from './components/AddTodoForm';
import TodoList     from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  addTodo(todo){
    var newState = Object.assign({}, this.state);
    newState.items.push(todo);
    this.setState({
      items: newState.items
    });
  }

  clearAll(){
    this.setState({
      items: []
    });
  }

  itemClick(index){
    var newState = Object.assign({}, this.state);
    newState.items[index].completed = !newState.items[index].completed;
    this.setState({
      items: newState.items
    });
  }

  deleteItem(index){
    var newState = Object.assign({}, this.state);
    newState.items.splice(index, 1);
    this.setState({
      items: newState.items
    });
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodoForm addTodo={(e)=>this.addTodo(e)} clearAll={(e)=>this.clearAll(e)}/>
        <TodoList todoList={this.state.items} itemClick={(e)=>this.itemClick(e)} deleteItem={(e)=>this.deleteItem(e)}/>
      </div>
    );
  }
}

export default App;
