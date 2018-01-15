import React from 'react';
import FilterSingle from './FilterSingle';


export default class FilterList extends React.Component {
  render(){
    return (
      <div className="filterList">
        {this.props.list.map( (filter) => (
            <FilterSingle key={`id-${filter}`} filterText={filter} onHandleRemove={this.props.onHandleRemove} />
        ))}
      </div>
    );
  }
}
