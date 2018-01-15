import React from 'react';
import { connect } from 'react-redux';

import store from '../redux/store/store';
import TitleText from './partials/TitleText.js';
import TitleArray from './partials/TitleArray.js';

class SelectedChunk extends React.Component {


  onHandleOpen = () => {
    var id = this.props.chunksReducer.selectedChunk.id;
    if( id !== undefined && id !== '0' ) this.props.history.push(`/chunk/${id}`);
    else alert('You have to select a chunk to open first!');
  }


  render(){

    return (
      <div className="selectedChunk">
        <h2>Selected chunk:</h2>
        <div className="selectedChunk__content">
          <TitleText headline="Title:" text={this.props.chunksReducer.selectedChunk.title} />
          <TitleText headline="Description:" text={this.props.chunksReducer.selectedChunk.description} />
          <TitleArray headline="Languages:" array={this.props.chunksReducer.selectedChunk.languages} />
          <TitleArray headline="Keywords:" array={this.props.chunksReducer.selectedChunk.keywords} />

          <button onClick={this.onHandleOpen}>Open this Chunk <i className="fa fa-cube" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  }


}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(SelectedChunk);
