import React from 'react';
import { connect } from 'react-redux';

import { getChunkById } from '../redux/actions/actions';
import TitleText from './partials/TitleText';
import TitleArray from './partials/TitleArray';

class ChunkPage extends React.Component {

  render(){
    return (
      <div className="chunkPage content-panel">
        <TitleText headline="Title:" text={this.props.selectedChunk.title} />
        <TitleText headline="Description:" text={this.props.selectedChunk.description} />
        <TitleArray headline="Languages:" array={this.props.selectedChunk.languages} />
        <TitleArray headline="Keywords:" array={this.props.selectedChunk.keywords} />

        <div className="singleCodeBlock">
          <h3>Code:</h3>
          <div className="singleCodeCode">
            <div id="singleCodeText">{this.props.selectedChunk.code}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  selectedChunk: state.chunksReducer.chunks.filter( chunk => chunk.id === props.match.params.id )[0]
});

export default connect(mapStateToProps)(ChunkPage);
