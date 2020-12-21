JSX is built on JavaScript and XML/HTML. As a result, adding event listeners will look relatively familiar. You add attributes to the HTML to indicate the name of the event you wish to handle.

The key change in the syntax is the creation of an anonymous function as the property. If we want to use `alert` to display a message, we could use the following:

```javascript
class Demo extends React.Component {
    render() {
        <button onClick={ () => alert('Hello, world!') }>Click me!</button>
    }
}
```

As you might suspect, we can create a function to listen to an event as well. We add the function to our component, and call it using the same syntax we used for `alert`.

```javascript
class Demo extends React.Component {
    displayMessage() {
        alert('Hello, world!');
    }

    render() {
        <button onClick={ () => displayMessage() }>Click me!</button>
    }
}
```

We can even add parameters to the event listener function, and use those when the event is raised.

```javascript
class Demo extends React.Component {
    displayMessage(message) {
        alert(message);
    }

    render() {
        <button onClick={ () => displayMessage('Dynamic message') }>Click me!</button>
    }
}
```

## this and JavaScript

In programming `this` is used by many languages, including JavaScript, to access the current instance of an object. But things are a little different in JavaScript because internally JavaScript sees everything, including objects, as functions. The end result of this behavior is the keyword `this` doesn't always behave as you might expect.

One way to ensure predictability for `this` is to use "fat arrow" (`=>`) functions. This updated syntax is better managed by ECMAScript 6 (ES6), and it's why we've been consistent in using it when creating anonymous functions.

It's also the reason why in the examples above we are creating an anonymous function for our event handlers. This will ensure `this` references the current component, allowing us to access `props`, `state`, and any other properties or methods on the component.
