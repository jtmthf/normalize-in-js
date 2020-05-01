import { KitchenSink } from '@normalize-in-js/shared';
import React from 'react';

import { Normalize } from '..';

export default {
  title: 'Styled Components/Normalize',
};

export const Base = () => (
  <>
    <Normalize />
    <KitchenSink />
  </>
);

Base.story = {
  name: 'Base',
};
