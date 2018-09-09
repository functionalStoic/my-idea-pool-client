import React from 'react';

import LIFG from './shared/LIFG';

export default ({ average, impact, ease, confidence }) => (
  <LIFG num={1}>
    {(average && average.toFixed(2)) ||
      ((Number(impact) + Number(ease) + Number(confidence)) / 3).toFixed(2)}
  </LIFG>
);
