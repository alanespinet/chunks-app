import React from 'react';
import { arrayToString } from '../../util/arrays';


export default (props) => (
  <div className="titleArray">
    <h3>{props.headline}</h3>
    <p>{arrayToString(props.array)}</p>
  </div>
)
