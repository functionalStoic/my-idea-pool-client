import React from 'react';

import { Dropdown } from './shared/Dropdown';
import LIFG from './shared/LIFG';

export default ({ isNew, editStatus, impact, onChange }) => (
  <LIFG num={1}>
    {isNew || editStatus ? (
      <Dropdown name="impact" id="impact" value={impact} onChange={onChange} />
    ) : (
      impact
    )}
  </LIFG>
);
