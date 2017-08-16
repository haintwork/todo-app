import React, {Component} from 'react';

class AddTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }
  onFormSubmit(e){
    e.preventDefault();
    var message = this.state.message;
    if(message){
      this.props.addTodo({
        message: message,
        completed: false
      });
    }
    this.setState({
      message: ''
    });
  }
  onMessageChanged(e){
    this.setState({
      message: e.target.value
    });
  }
  onClearButtonClicked(e){
    e.preventDefault();
    this.props.clearAll();
  }
  render(){
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input type="text" placeholder="New task" onChange={(e)=>this.onMessageChanged(e)} value={this.state.message}></input>
        <input type="submit" value="Add"></input>
        <input type="button" onClick={(e)=>this.onClearButtonClicked(e)} value="Clear All"></input>
      </form>
    );
  }
}

export default AddTodoForm;
