# Babel

# What is Babel
- [babel](https://babeljs.io/)
- [the super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js)
- convert ECMAScript 2015+ code into a backwards compatible version
- Transform syntax
- Polyfill features
- `@babel/core`
- `@babel/cli`
- `@babel/preset-env`
- `@babel/preset-typescript`
- `@babel/preset-react`
- `@babel/preset-flow`

```json title="babel.config.json"
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

## Three primary stages

1. *Parsing* is taking raw code and turning it into a more abstract representation of the code.
2. *Transformation* takes this abstract representation and manipulates to do whatever the compiler wants it to.
3. *Code Generation* takes the transformed representation of the code and turns it into new code.


## Options

- `plugins`, 

## Config Files

- `babel.config.json` and `.babelrc.json`
- For compatibility reasons, `.babelrc` is an alias for `.babelrc.json`

## cli

- `npm install --save-dev @babel/core @babel/cli`
- `npx babel script.js`
- `npx babel script.js --out-file script-compiled.js`

## Plugins
> apply transformation to your code

```json
{
  "plugins": []
}
```

## Ordering

- Plugins run before Presets
- Plugin ordering is first to last
- Preset ordering is reversed

## Stage-X

- Stage 0 > Stage 1 > Stage 2 > Stage 3 > Stage 4

## Presets
> a set of plugins

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

## polyfill
> `@babel/polyfill`

- deprecated since Babel 7.4.0
- no < Stage 4 proposals

```javascript
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```
