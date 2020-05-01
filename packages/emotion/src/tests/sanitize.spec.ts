/// <reference types="jest-image-snapshot" />

import { setupPage } from '@normalize-in-js/shared';

import story, {
  Base,
  WithTypography,
  WithForms,
  WithPage,
  All,
} from '../stories/Sanitize.stories';

test('base', async () => {
  await setupPage(story, Base);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});

test('typography', async () => {
  await setupPage(story, WithTypography);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});

test('forms', async () => {
  await setupPage(story, WithForms);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});

test('page', async () => {
  await setupPage(story, WithPage);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});

test('all', async () => {
  await setupPage(story, All);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});
