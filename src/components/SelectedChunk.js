import React from 'react';
import { connect } from 'react-redux';


import store from '../redux/store/store';

class SelectedChunk extends React.Component {


  render(){

    return (
      <div>
        <h2>Selected chunk:</h2>
        <div>
          <div>
            <h3>Title:</h3>
            <p>{this.props.selectedChunk.title}</p>
          </div>

          <div>
            <h3>Description:</h3>
            <p>{this.props.selectedChunk.description}</p>
          </div>
        </div>
      </div>
    )
  }


}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(SelectedChunk);
