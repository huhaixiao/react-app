# CSS

## grid layout
```css
.waterfall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(133px, 1fr));
  grid-gap: 0.25em;
  grid-auto-flow: row dense;
  grid-auto-rows: 20px;
}
.waterfall .item {
  width: 100%;
  background: #222;
  color: #ddd;
}
.waterfall .item:nth-of-type(3n + 1) {
  grid-row: auto / span 5;
}
.waterfall .item:nth-of-type(3n + 2) {
  grid-row: auto / span 6;
}
.waterfall .item:nth-of-type(3n + 3) {
  grid-row: auto / span 8;
}
```
