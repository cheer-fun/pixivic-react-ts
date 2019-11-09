import React, { memo } from 'react';
import './index.styl';

function Loading() {
  return (
    <div className="loading">
      <div></div>
    </div>
  )
}

export default React.memo(Loading);
