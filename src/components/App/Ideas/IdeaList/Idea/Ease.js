import React from 'react';

import { Dropdown } from './shared/Dropdown';
import LIFG from './shared/LIFG';

export default ({ isNew, editStatus, ease, onChange }) => (
  <LIFG num={1}>
    {isNew || editStatus ? (
      <Dropdown name="ease" id="ease" value={ease} onChange={onChange} />
    ) : (
      ease
    )}
  </LIFG>
);
