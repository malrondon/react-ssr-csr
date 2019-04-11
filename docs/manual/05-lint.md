# Lint

## Summary

1. [GIT Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Technologies](./04-technologies.md)
5. [Lint](./05-lint.md)
6. [Patterns](./06-patterns.md)

## Rules used:

- ESLint recommended : https://eslint.org/docs/rules/
- Google : https://github.com/google/eslint-config-google
- Prettier: https://prettier.io/

## And custom rules:

- Using arrow function, if you have only 1 param, do not use the parentheses;

ex:

```
item => item
(item, index) => ${item}-${index}
```

- Import order of files. Order:
  - node_modules dependencies
  - internal files - js
  - internal files - scss

ex:

```
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { configApi, localStorageConfig } from '../../config';
```

- Do not use index for the key property

ex:

```
[{ id: '1233' }].map(item => <Component key={item.id} /> )
```

- Give preference for spread operator

ex:

```
const { page } = objeto.subnivel.location;
```

- Object declaration with properties on the same line will break if it has more than 120 columns, placing one underneath the other (the same is for attributes of a component).

ex:

```
const { getExamples, changeRunningExample, listExamples, location } = this.props;

const {
getExamples,
changeRunningExample,
listExamples,
location,
example1,
example2,
example3,
} = this.props;
```

**[⬆ back to top](#summary)**
