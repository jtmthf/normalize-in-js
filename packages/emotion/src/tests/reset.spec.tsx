import React from 'react';
import { render } from '@testing-library/react';

import { Reset } from '../reset';

test('reset', () => {
  expect(() => render(<Reset />)).not.toThrow();
});
