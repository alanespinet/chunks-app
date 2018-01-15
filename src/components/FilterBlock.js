import React from 'react';
import FilterInput from './FilterInput';
import FilterList from './FilterList';


export default (props) => (
  <div className="filterBlock">
    <h5>{props.headline}</h5>
    <FilterInput formId={props.formId} onHandleAdd={props.onHandleAdd} />
    <FilterList list={props.filterList} onHandleRemove={props.onHandleRemove} />
  </div>
);
