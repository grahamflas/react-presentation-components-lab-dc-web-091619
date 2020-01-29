import React from 'react';

class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }

  handleClick = () => {
    let newState = this.state.mood === "happy" ? "sad" : "happy"

    this.setState({
      mood: newState
    })
  }
}

export default SimpleComponent