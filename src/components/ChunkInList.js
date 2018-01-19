import React from 'react';
import { arrayToString } from '../util/arrays.js';



export default class ChunkInList extends React.Component {

  handleDeletion = (e) => {
    e.stopPropagation();
    this.props.handleDeletion( this.props.chunk.chunk_id );
  }

  handleSelection = () => {
    this.props.handleSelection( this.props.chunk.chunk_id );
  }

  render(){
    return (
      <div onClick={this.handleSelection} className="chunkInList">
        <button onClick={this.handleDeletion}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
        <p>{this.props.chunk.title}</p>
        <p className="languages">{arrayToString(this.props.chunk.languages)}</p>
      </div>
    );
  }
}
