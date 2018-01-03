import React from 'react';


export default class ChunkInList extends React.Component {

  handleDeletion = (e) => {
    e.stopPropagation();
    this.props.handleDeletion( this.props.chunk.title );
  }

  handleSelection = () => {
    this.props.handleSelection( this.props.chunk.title );
  }

  render(){
    return (
      <div onClick={this.handleSelection}>
        <button onClick={this.handleDeletion}>X</button>
        <p>{this.props.chunk.title}</p>
      </div>
    );
  }
}
