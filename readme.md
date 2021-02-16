# Salem UI

[![npm (scoped)](https://img.shields.io/npm/v/salem-ui.svg)](https://www.npmjs.com/package/salem-ui)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@fredericoo/salem-ui.svg)](https://www.npmjs.com/package/salem-ui)

Succinct react.js predefined components to make coding quick yet refined..

## Install

```
$ npm i salem-ui
```

## Usage

```js
import { Grid } from "salem-ui";
```

## Components

### Grid

CSS grid component to be used in JSX.

```js
<Grid>
    <Grid.Col>
        I am the content of a column. If I'm a string, I will be wrapped in a div.
    </Grid.Col>
    <Grid.Col>
        <span>I am the content of a column. If I'm a single child, I will not be wrapped on anything, and classes will be passed on towards the child element.</span>
    </Grid.Col>
    <Grid.Col>
        <h2>I am the content of a column</h2>
        <p>If more than one child resides within a column, it'll be wrapped in a div.<div>
    </Grid.Col>
</Grid>
```

### Grid props

- **cols**<Integer>: how many columns the grid has. Defaults to 12.
- **gutter**<Integer>: defines the gap between grid columns.
- **container**<Boolean>: if present, makes grid confined to container.

### Grid.Col props
