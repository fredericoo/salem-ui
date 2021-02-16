# Salem UI

[![npm (scoped)](https://img.shields.io/npm/v/salem-ui.svg)](https://www.npmjs.com/package/salem-ui)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/salem-ui.svg)](https://www.npmjs.com/package/salem-ui)

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

- **gutter**(Integer): defines the gap between grid columns.
- **container**(Boolean): if present, makes grid confined to container.

### Grid.Col props

- **sm, md, lg, xl**(String): column lenghts or start/end values. It works just like CSS grid's `grid-column`.
  Some pre-named columns exist to ease your suffering: - **screen-start**, **screen-end**: takes the whole width of the Grid component, e.g: `screen-start / screen-end` will have the column spanning the whole width. - **grid-start**, **grid-end**: takes the container-width into consideration. E.g: `grid-start / grid-end` will have the column spanning the inside container only. - **col-1** to **col-12**: defines which column of the 12-column grid to start or end our column. E.g: `grid-start / col-7` will have the column spanning half the container width; `col-3 / span 6` will span 6 columns starting from column #3.
- **rowSm**, **rowMd**, **rowLg**, **rowXl**(String): defines row values in case of either reordering or overlapping content. If not defined, `initial` will be used.
