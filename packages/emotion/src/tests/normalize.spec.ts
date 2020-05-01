/// <reference types="jest-image-snapshot" />

import { setupPage } from '@normalize-in-js/shared';

import story, { Base } from '../stories/Normalize.stories';

test('normalize', async () => {
  await setupPage(story, Base);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});
