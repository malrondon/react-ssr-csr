# Patterns

## Summary

1. [GIT Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Technologies](./04-technologies.md)
5. [Lint](./05-lint.md)
6. [Patterns](./06-patterns.md)

## API requests with Redux

3 actions:
 - Request
 - Request Success
 - Request Failure

This pattern contemplates the rule to present `loading` as feedback to the user.

That consists of the suffix rule with the type property: `REQUEST`, `REQUEST_SUCCESS`, `REQUEST_FAILURE`.

These 3 actions will not be exposed in the container or component. They will be triggered by an encapsulation action that will have the pattern with the prefix `fetch`.

Practical example:

```
export const actionsRequest = () => {
  return {
    type: ACTIONS_REQUEST,
  };
};

export const actionsRequestSuccess = data => {
  return {
    type: ACTIONS_REQUEST_SUCCESS,
    payload: {
      data,
    },
  };
};

export const actionsRequestFailure = () => {
  return {
    type: ACTIONS_REQUEST_FAILURE,
    error: true,
  };
};

export const fetchActions = (page = 1, searchText) => dispatch => {
  dispatch(actionsRequest());
  return actions
    .get(page, searchText)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        setTimeout(() => {
          dispatch(actionsRequestSuccess(response.data));
        }, 2000);
      }
    })
    .catch(error => {
      dispatch(actionsRequestFailure());
    });
};
```

**[⬆ back to top](#summary)**
