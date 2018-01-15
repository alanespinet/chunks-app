import React from 'react';

export default class FilterSingle extends React.Component {

  onHandleRemove = () => {
    this.props.onHandleRemove( this.props.filterText );
  }

  render(){
    return (
      <div className="filterSingle">
        <p>{this.props.filterText}</p>
        <button onClick={this.onHandleRemove}><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
      </div>
    )
  }
}
