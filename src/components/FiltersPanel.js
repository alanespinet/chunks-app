import React from 'react';
import { connect } from 'react-redux';

import '../util/arrays.js';
import FilterBlock from './FilterBlock';
import { setFilter } from '../redux/actions/filters';



class FiltersPanel extends React.Component {

  state = {
    languages: [],
    keywords: []
  }

  onHandleAddLanguage = ( language ) => {
    this.setState( (prevState) => ({
      ...prevState,
      languages: prevState.languages.concat( language )
    }) );
  };

  onHandleAddKeyword = ( keyword ) => {
    this.setState( (prevState) => ({
      ...prevState,
      keywords: prevState.keywords.concat( keyword )
    }) );
  };

  onHandleDeletionLanguage = ( language ) => {
    this.setState( (prevState) => ({
      ...prevState,
      languages: prevState.languages.filter( thelanguage => thelanguage !== language )
    }) );
  };

  onHandleDeletionKeybord = ( keyword ) => {
    this.setState( (prevState) => ({
      ...prevState,
      keywords: prevState.keywords.filter( thekeyword => thekeyword !== keyword )
    }) );
  };


  onHandleFilter = (e) => {
    e.preventDefault();
    this.props.dispatch(setFilter(this.state.languages, this.state.keywords));
  }

  render(){
    return (
      <div className="filterPanel">
        <h4>Filters:</h4>
        <p className="filtersNote">(Note that at least should apply one language AND one keyword, but NOT all at the same time)</p>

        <div className="filterBlocks">
          <div className="languagesBlock">
            <FilterBlock
              headline="Languages"
              filterList={this.state.languages}
              onHandleAdd={this.onHandleAddLanguage}
              onHandleRemove={this.onHandleDeletionLanguage}
              formId="languagesForm"
            />
          </div>

          <div className="keywordsBlock">
            <FilterBlock
              headline="Keywords"
              filterList={this.state.keywords}
              onHandleAdd={this.onHandleAddKeyword}
              onHandleRemove={this.onHandleDeletionKeybord}
              formId="keywordsForm"
            />
          </div>
        </div>

        <div className="filterButton">
          <a onClick={this.onHandleFilter}>Filter <i className="fa fa-filter" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default connect()(FiltersPanel);
