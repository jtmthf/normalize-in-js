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

const CustomPreflight = createPreflightStyle({
  fontFamilySans: `"Comic Sans MS", cursive, sans-serif`,
  fontFamilyMono: `"Lucida Console", Monaco, monospace`,
  borderColor: 'rebeccapurple',
});

function App() {
  return <CustomPreflight />;
}
```

#### With Theme

```tsx
import { Preflight, normalizeTheme } from '@normalize-in-js/styled-components';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider
      theme={{
        [normalizeTheme]: {
          fontFamilySans: `"Comic Sans MS", cursive, sans-serif`,
          fontFamilyMono: `"Lucida Console", Monaco, monospace`,
          borderColor: 'rebeccapurple',
        },
      }}
    >
      <Preflight />
    </ThemeProvider>
  );
}
```

#### Theme Config

| Property         | Default                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fontFamilySans` | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |  |
| `fontFamilyMono` | `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`                                                                                                            |  |
| `borderColor`    | `currentColor`                                                                                                                                                                                    |  |
