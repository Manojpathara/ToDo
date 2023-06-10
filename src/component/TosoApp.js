import React, { Component } from 'react'
import "./TodoApp.css";

export default class TosoApp extends Component {

  state={
    input: "",
    items :[]
  }

 handleChange = (event)=>{
  this.setState({
    input : event.target.value
  });
  
}

storeItems =(event)=>{
  event.preventDefault();
  const { input }= this.state;
  this.setState({
  items:[...this.state.items, input],
  input : ""

  })
}

deleteItem =(key) =>{
  
  this.setState({
    items : this.state.items.filter((data,index) => index !==key)
  })
}

  render() {

   const { input,items }=this.state;
    return (
      <div className="todo-container">
        
        <form className='input-section' onSubmit={this.storeItems}>
            <h1>Todo App</h1>
            <input type='text' value={input} onChange={this.handleChange} placeholder='Enter items...'/>
        </form>
        <ul>
            { items.map((data,index) => (
              <li key={ index }>{ data } <i className="fa-solid fa-trash-can" onClick={ ()=> this.deleteItem(index)}></i>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
