import { KitchenSink } from '@normalize-in-js/shared';
import React from 'react';

import { Sanitize } from '..';
import { SanitizeTypography, SanitizeForms, SanitizePage } from '../sanitize';

export default {
  title: 'Styled Components/Sanitize',
};

export const Base = () => (
  <>
    <Sanitize />
    <KitchenSink />
  </>
);

Base.story = {
  name: 'Base',
};

export const WithTypography = () => (
  <>
    <Sanitize />
    <SanitizeTypography />
    <KitchenSink />
  </>
);

WithTypography.story = {
  name: 'With Typography',
};

export const WithForms = () => (
  <>
    <Sanitize />
    <SanitizeForms />
    <KitchenSink />
  </>
);

WithForms.story = {
  name: 'With Forms',
};

export const WithPage = () => (
  <>
    <Sanitize />
    <SanitizePage />
    <KitchenSink />
  </>
);

WithPage.story = {
  name: 'With Page',
};

export const All = () => (
  <>
    <Sanitize />
    <SanitizeTypography />
    <SanitizeForms />
    <SanitizePage />
    <KitchenSink />
  </>
);

All.story = {
  name: 'All',
};
