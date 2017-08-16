import React, {Component} from 'react';

class TodoItem extends Component {
  onItemClick(e){
    e.preventDefault();
    // store.dispatch(completeTodo(this.props.index));
    // defaultState.items[this.props.index].completed = !defaultState.items[this.props.index].completed;
    this.props.itemClick(this.props.index);
  }
  onDeleteClicked(e){
    e.preventDefault();
    // defaultState.items.splice(this.props.index, 1);
    this.props.deleteItem(this.props.index);
  }
  render(){
    return(
      <li>
        <a href="" onClick={(e)=>this.onItemClick(e)} style={{textDecoration: this.props.completed? 'line-through':'none'}}>{this.props.message.trim()}</a>
        <a href="" onClick={(e)=>this.onDeleteClicked(e)} style={{textDecoration: 'none'}}> [x]</a>
      </li>
    );
  }
}

export default TodoItem;
