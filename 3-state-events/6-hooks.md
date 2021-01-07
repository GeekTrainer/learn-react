Hooks are a common pattern in frameworks where values change or other events occur. They are a centralized mechanism for injecting your own code to execute when state changes or other steps in an application's lifecycle.

## Effect hook

In React 16.8 a hook named **Effect** was introduced. The Effect Hook is raised whenever state changes or the page is re-rendered. It allows you to execute code in response. The code you execute can have side effects, meaning you can update values as needed.

## When to use the Effect Hook

You can use the Effect Hook whenever you need to centralize code to respond to state being changed. Imagine a complex form with numerous values. You typically want to disable the Submit button until the data to be sent to the server is in a valid state. You may have events for individual values being changed in the data (such as retrieving a list of states or provinces from the server after a country has been selected). Having each individual event listener examine the state to see if the data is ready to be sent to the server would be inefficient. With an Effect Hook, can create one function which can look at the data, and if it is in a valid state enable the submit button.

## useEffect

To register a listener for the Effect Hook you use `useEffect`. `useEffect` accepts a parameter-less function to be executed.

```javascript
useEffect(() => {
    // code goes here
});
```

By default, `useEffect` executes whenever state is changed on any stateful object. You can provide a filter to only enable the hook for a particular group of objects.

```javascript
useEffect(() => {
    // code goes here
}, [ someStatefulObject ]);
