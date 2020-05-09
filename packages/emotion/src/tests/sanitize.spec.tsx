import React from 'react';
import { render } from '@testing-library/react';

import {
  Sanitize,
  SanitizeTypography,
  SanitizeForms,
  SanitizePage,
} from '../sanitize';

test('sanitize', () => {
  expect(() => render(<Sanitize />)).not.toThrow();
});

test('typography', () => {
  expect(() => render(<SanitizeTypography />)).not.toThrow();
});

test('forms', () => {
  expect(() => render(<SanitizeForms />)).not.toThrow();
});

test('page', () => {
  expect(() => render(<SanitizePage />)).not.toThrow();
});

test('all', () => {
  expect(() =>
    render(
      <>
        <Sanitize />
        <SanitizeTypography />
        <SanitizeForms />
        <SanitizePage />
      </>,
    ),
  ).not.toThrow();
});
