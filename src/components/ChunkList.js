import React from 'react';
import { connect } from 'react-redux';


import ChunkInList from './ChunkInList';
import * as actions from '../redux/actions/actions';

import store from '../redux/store/store';
import chunksSelector from '../redux/selectors/chunks';



class ChunkList extends React.Component {


  handleDeletion = (id) => {
    this.props.dispatch( actions.startDeleteChunk(id) );
  }

  handleSelection = (id) => {
    this.props.dispatch( actions.getChunk(id) );
  }

  // componentWillMount = () => {
  //   this.props.dispatch( actions.startSetChunks() );
  // }

  render() {

    return (
      <div className="chunkList">
        <h2>Your recorded chunks:</h2>
        <div className="list">
          {this.props.chunksList.map( (chunk) => (
            <ChunkInList
              key={chunk.title}
              chunk={chunk}
              handleDeletion={this.handleDeletion}
              handleSelection={this.handleSelection}
            />
          ))}
        </div>
      </div>
    );
  }

};


const mapStateToProps = (state) => {
  return {
    chunksList: chunksSelector( state.chunksReducer.chunks, state.filtersReducer.languages, state.filtersReducer.keywords )
  };
};


export default connect(mapStateToProps)(ChunkList);
