/// <reference types="jest-environment-puppeteer" />

import { kebabCase } from 'lodash-es';

export type StoryDefault = {
  title: string;
};

export type Story = {
  story: {
    name: string;
  };
};

export async function setupPage(
  { title }: StoryDefault,
  { story: { name } }: Story,
) {
  await page.goto(
    `http://localhost:9009/iframe.html?id=${kebabCase(title)}--${kebabCase(
      name,
    )}`,
  );
  await page.setViewport({
    width: 800,
    height: 4000,
  });
}
