import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var items = [];
    this.props.todoList.forEach((item, index)=>{
      items.push(
        <TodoItem
          key={index}
          index={index}
          message={item.message}
          completed={item.completed}
          itemClick={this.props.itemClick}
          deleteItem={this.props.deleteItem}
        />
      );
    });
    if(!items.length){
      return(
        <div>
          <p>Please add task to do.</p>
        </div>
      );
    }
    else{
      return(
        <ol>{items}</ol>
      );
    }
  }
}

export default TodoList;
