import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { startAddChunk } from '../redux/actions/actions';
import FilterBlock from './FilterBlock';



class AddChunkPage extends React.Component {

  state = {
    chunk: {
      chunk_id: '',
      title: '',
      description: '',
      languages: [],
      keywords: [],
      code: ''
    }
  }

  componentDidMount(){
    this.setState( (prevState) => ({
      chunk: {
        ...prevState.chunk,
        chunk_id: uuid()
      }
    }));
  }

  onHandleAddChunk = () => {
    var strcode = this.state.chunk.code;
    this.props.dispatch( startAddChunk(this.state.chunk) );
    this.props.history.push('/');
  }

  onChangeTitle = (e) => {
    var value = e.target.value;
    this.setState((prevState) => ({
      chunk: {
        ...prevState.chunk,
        title: value
      }
    }));
  };

  onChangeDescription = (e) => {
    var desc = e.target.value;
    this.setState((prevState) => ({
      chunk: {
        ...prevState.chunk,
        description: desc
      }
    }));
  };

  onChangeCode = (e) => {
    var code = e.target.value;
    this.setState((prevState) => ({
      chunk: {
        ...prevState.chunk,
        code
      }
    }));
  }


  onAddLanguage = (language) => {
    this.setState( (prevState) => ({
      chunk: {
        ...prevState.chunk,
        languages: prevState.chunk.languages.concat(language)
      }
    }));
  };

  onAddKeyword = (keyword) => {
    this.setState( (prevState) => ({
      chunk: {
        ...prevState.chunk,
        keywords: prevState.chunk.keywords.concat(keyword)
      }
    }));
  };

  onRemoveLanguage = (language) => {
    this.setState( (prevState) => ({
      chunk: {
        ...prevState.chunk,
        languages: prevState.chunk.languages.filter( (lang) => lang !== language )
      }
    }));
  }

  onRemoveKeyword = (keyword) => {
    this.setState( (prevState) => ({
      chunk: {
        ...prevState.chunk,
        keywords: prevState.chunk.keywords.filter( (keyw) => keyw !== keyword )
      }
    }));
  }


  render(){
    return (
      <div className="addChunkPage content-panel">
        <div className="addChunkPage__panels">

          <div className="leftPanel">

            <div className="controlGroup">
              <label htmlFor="txtChunkTitle">Title:</label>
              <input id="txtChunkTitle" name="txtChunkTitle" onChange={this.onChangeTitle}/>
            </div>

            <div className="controlGroup">
              <label htmlFor="txtChunkDescription">Description:</label>
              <textarea id="txtChunkDescription" name="txtChunkDescription" onChange={this.onChangeDescription}></textarea>
            </div>

            <div className="controlGroup">
              <FilterBlock
                headline="Languages"
                filterList={this.state.chunk.languages}
                onHandleAdd={this.onAddLanguage}
                onHandleRemove={this.onRemoveLanguage}
                formId="languagesForm"
              />
            </div>

            <div className="controlGroup">
              <FilterBlock
                headline="Keywords"
                filterList={this.state.chunk.keywords}
                onHandleAdd={this.onAddKeyword}
                onHandleRemove={this.onRemoveKeyword}
                formId="keywordsForm"
              />
            </div>

          </div>

          <div className="rightPanel">
            <label htmlFor="txtChunkCode">Code:</label>
            <textarea id="txtChunkCode" name="txtChunkCode" onChange={this.onChangeCode}></textarea>
          </div>

        </div>

        <div className="addButtonWrapper">
          <button onClick={this.onHandleAddChunk} className="addButton">Add Chunk <i className="fa fa-code" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  }
}

export default connect()(AddChunkPage);
