import { KitchenSink } from '@normalize-in-js/shared';
import React from 'react';

import { Reset } from '../reset';

export default {
  title: 'Styled JSX/Reset',
};

export const Base = () => (
  <>
    <Reset />
    <KitchenSink />
  </>
);

Base.story = {
  name: 'Base',
};
