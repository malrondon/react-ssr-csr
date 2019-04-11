# Architecture

## Summary

1. [GIT Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Technologies](./04-technologies.md)
5. [Lint](./05-lint.md)
6. [Patterns](./06-patterns.md)

## Folders

```sh
├── dist
├── docs
│   └── manual
├── helpers
│   └── component
├── internals
│   ├── test
│   └── webpack
├── packages
├── server
├── source
│   ├── api
│   ├── components
│   │   ├──
│   │   └──
│   ├── config
│   ├── helpers
│   │   ├── 
│   │   └── 
│   ├── layouts
│   ├── pages
│   │   ├──
│   │   └──
│   ├── reducers
│   └── styles
│       ├── placeholders
│       │   └── variables
│       ├── 01-tools
│       │   ├── functions
│       │   └── mixins
│       ├── 02-generic
│       ├── 03-base
│       ├── 04-vendor
│       ├── 05-objects
│       ├── 06-components
│       ├── 07-pages
│       ├── 08-theme
│       └── 09-trumps
└── tests
    ├── 
    └── utils
```

## Components

  - components
    - button
      - button-component.js `component`
      - button.scss `style`
      - button.spec.js `tests`
      - index.js

## CLI

### Without redux

```bash
./helpers/component/create.sh component-name path
```

```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-component.js
    └── component-name/component-name.spec.js
```

### With redux

```bash
./helpers/component/create-with-redux.sh component-name path
```

```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-actions.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name-constants.js
    ├── component-name/component-name-container.js
    ├── component-name/component-name-reducer.js
    └── component-name/component-name.spec.js
```

**[⬆ back to top](#summary)**
