import React from 'react';
import { render } from '@testing-library/react';

import { Normalize } from '../normalize';

test('normalize', () => {
  expect(() => render(<Normalize />)).not.toThrow();
});
