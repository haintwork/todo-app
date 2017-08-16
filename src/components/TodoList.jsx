import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    // console.log("log");
    super(props);
    // this.state = {
    //   items: props.todoList
    // };
    // console.log("todoList: ", this.props.todoList);
  }
  componentWillMount(){
    // store.subscribe(()=>{
    //   this.setState({
    //     items: store.getState().items?store.getState().items:[],
    //     filter: store.getState().filter
    //   })
    // });
    // this.setState({
    //   items: this.props.todoList
    // });
    // console.log("will mount");
  }
  componentDidMount(){
    // this.setState({
    //   items: this.props.todoList
    // });
    // console.log("did mount");
  }
  render(){
    // console.log("todoList render!");
    // console.log("items", this.state.items);
    console.log("todoList: ", this.props.todoList);
    var items = [];
    // var filter = this.state.filter;
    // if(this.state.items){
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
    // }
    if(!items.length){
      return(
        <div>
          <p>Please add task to do.</p>
        </div>
      );
    }
    else{
      return(
        <ol>
          {items}
        </ol>
      );
    }
  }
}

export default TodoList;
