# Normalize in JS - Styled Components

## Installation

### Yarn

```sh
yarn add @normalize-in-js/styled-components
```

### NPM

```sh
npm install @normalize-in-js/styled-components
```

## Usage

### Normalize

```tsx
import { Normalize } from '@normalize-in-js/styled-components';

function App() {
  return <Normalize />;
}
```

### Reset

```tsx
import { Reset } from '@normalize-in-js/styled-components';

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
} from '@normalize-in-js/styled-components';

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
