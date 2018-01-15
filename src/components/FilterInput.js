import React from 'react';



export default class FilterInput extends React.Component {

  onHandleAdd = (e) => {
    e.preventDefault();
    var newElement = document.getElementById(this.props.formId).elements.txtFilterInputName.value;
    this.props.onHandleAdd( newElement );
    document.getElementById(this.props.formId).elements.txtFilterInputName.value = "";
  }

  render(){
    return (
      <div className="filterInput">
        <form id={this.props.formId}>
          <input type="text" name="txtFilterInputName" />
          <button onClick={this.onHandleAdd}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </form>
      </div>
    )
  }
}
