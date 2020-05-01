import { KitchenSink } from '@normalize-in-js/shared';
import React from 'react';

import { Reset } from '..';

export default {
  title: 'Emotion/Reset',
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
