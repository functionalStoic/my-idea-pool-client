import React from 'react';

import { Dropdown } from './shared/Dropdown';
import LIFG from './shared/LIFG';

export default ({ isNew, editStatus, confidence, onChange }) => (
  <LIFG num={1}>
    {isNew || editStatus ? (
      <Dropdown
        name="confidence"
        id="confidence"
        value={confidence}
        onChange={onChange}
      />
    ) : (
      confidence
    )}
  </LIFG>
);
