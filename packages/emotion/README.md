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
