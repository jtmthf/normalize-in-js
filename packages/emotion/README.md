# Normalize in JS - Emotion

## Installation

### Yarn

```sh
yarn add @normalize-in-js/emotion
```

### NPM

```sh
npm install @normalize-in-js/emotion
```

## Usage

### Normalize

```tsx
import { Normalize } from '@normalize-in-js/emotion';

function App() {
  return <Normalize />;
}
```

### Reset

```tsx
import { Reset } from '@normalize-in-js/emotion';

function App() {
  return <Reset />;
}
```

### Sanitize

```tsx
import {
  Sanitize,
  SanitizeTypography,
  SanitizeForms,
  SanitizePage,
} from '@normalize-in-js/emotion';

function App() {
  return (
    <>
      <Sanitize />
      <SanitizeTypography />
      <SanitizeForms />
      <SanitizePage />
    </>
  );
}
```

### Preflight

```tsx
import { Preflight } from '@normalize-in-js/styled-components';

function App() {
  return <Preflight />;
}
```

#### With Config

```tsx
import { createPreflightStyle } from '@normalize-in-js/styled-components';
import { Global } from '@emotion/core';

const customPreflight = createPreflightStyle({
  fontFamilySans: `"Comic Sans MS", cursive, sans-serif`,
  fontFamilyMono: `"Lucida Console", Monaco, monospace`,
  borderColor: 'rebeccapurple',
});

function App() {
  return <Global styles={customPreflight} />;
}
```

#### Theme Config

| Property         | Default                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fontFamilySans` | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |  |
| `fontFamilyMono` | `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`                                                                                                            |  |
| `borderColor`    | `currentColor`                                                                                                                                                                                    |  |
