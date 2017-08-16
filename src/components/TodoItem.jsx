import React, {Component} from 'react';

class TodoItem extends Component {
  onItemClick(e){
    e.preventDefault();
    this.props.itemClick(this.props.index);
  }
  onDeleteClicked(e){
    e.preventDefault();
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
