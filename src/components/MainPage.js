import React from 'react';

import ChunkList from './ChunkList';
import SelectedChunk from './SelectedChunk';
import FiltersPanel from './FiltersPanel';


export default (props) => (
  <div className="mainPage content-panel">
    <div className="mainLeftPanel">
      <ChunkList />
      <FiltersPanel />
    </div>
    <SelectedChunk history={props.history} />
  </div>
);
