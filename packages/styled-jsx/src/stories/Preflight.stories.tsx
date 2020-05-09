import { KitchenSink } from '@normalize-in-js/shared';
import React from 'react';

import { Preflight } from '../preflight';

export default {
  title: 'Styled JSX/Preflight',
};

export const Base = () => (
  <>
    <Preflight />
    <KitchenSink />
  </>
);

Base.story = {
  name: 'Base',
};
