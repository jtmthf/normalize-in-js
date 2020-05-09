import React from 'react';
import { render } from '@testing-library/react';

import { Preflight } from '../preflight';

test('preflight', () => {
  expect(() => render(<Preflight />)).not.toThrow();
});
