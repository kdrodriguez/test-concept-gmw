import React, { Component } from 'react'


class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
          <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
          <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>

        <h1>Move the mouse around!</h1>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

export default MouseTracker;