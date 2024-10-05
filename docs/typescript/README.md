# Typescript

- `<S extends string = never>`
- `onxxx` vs `addEventListener('xxx')`
- [Create React App](https://create-react-app.dev/)
- [ahooks](https://ahooks.js.org/)
- [react spring](https://react-spring.dev/)
- [掘金网页 Dashboard](https://e.juejin.cn/#/)
- [csb Demo](https://m05hfn.csb.app/)
- [Day.js](https://day.js.org/)
- [codepen](https://codepen.io/)
- [Bulletproff React](https://github.com/alan2207/bulletproof-react)
- [css Grid Tracks](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks)
- [css grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
- [css fit-content](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content_function)
- [codepen waterfall](https://codepen.io/ycw/pen/gdGBPx)
- [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- [prettier-plugin-import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort)
- [rc-form](https://vscode.dev/github/react-component/field-form)


## 同构 & 异构

在编程中，同构和异构有以下特定含义：

**一、同构**

在编程语境下，同构通常有以下特点：

- **代码复用性高**：同构代码可以在不同的环境或平台上运行，而无需进行大量的修改。例如，使用同一种编程语言编写的前端和后端代码，通过一些特定的框架可以实现代码的共享和复用。比如使用 JavaScript 进行全栈开发，前后端都使用相同的语言和编程模式，大大提高了开发效率。
- **开发效率提升**：由于代码结构和逻辑相似，开发者可以更快速地理解和维护整个项目。对于团队协作来说，同构的编程方式可以减少不同技术栈之间的沟通成本和学习成本。
- **一致的编程体验**：无论是在开发、测试还是部署阶段，同构编程都能提供较为一致的体验。例如，使用同构的 React 框架，开发者可以使用相同的组件和逻辑在浏览器和服务器端进行渲染，减少了因环境不同而带来的差异。

**二、异构**

在编程领域，异构表现为：

- **技术多样性**：异构编程意味着使用不同的编程语言、框架或技术来构建一个系统。比如在一个大型项目中，可能会使用 Java 编写后端服务，使用 Python 进行数据分析，使用 JavaScript 构建前端界面。这种技术的多样性可以充分发挥各种语言和工具的优势。
- **系统复杂性**：异构系统通常更加复杂，需要解决不同技术之间的兼容性和集成问题。例如，在不同编程语言之间进行数据交互时，需要考虑数据格式的转换和通信协议的选择。同时，异构系统的测试和维护也更加困难，需要具备多种技术的专业知识。
- **性能优化**：有时候，异构编程是为了实现特定的性能需求。不同的硬件平台或软件组件可能在某些任务上具有更好的性能表现。例如，使用 GPU 进行大规模并行计算，而使用 CPU 进行一般的逻辑处理，可以提高整个系统的性能。

## Bulletproof React

```bash
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```
