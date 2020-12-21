One of the most powerful tools available to JavaScript arrays is `map`. `map` allows you to create a modified copy of an array. This is useful when we need to convert the values of an array for display purposes. `map` is used quite frequently in React as it's the best way to display a list of items to a user.

## Using map

`map` behaves similarly to a `for...of` loop or the `forEach` method. It executes once for each item in the array. The key difference is it generates a new array with the values returned by the function passed into `map`.

Let's explore `map` by seeing how we could create a new array from an existing one with the numbers squared. We start by creating an array of numbers.

```javascript
const numbers = [2, 5, 8];
```

Then we use `map`. `map` accepts a function with a single parameter. The parameter will be set to the value of each number in the original array. We will create an anonymous function for this purpose by using the `=>` or fat arrow syntax.

```javascript
const squared = numbers.map((number) => {
    return number * number;
});
```

`squared` is a new array containing our original numbers squared. If you displayed them by using `console.log` you would see the following:

```javascript
console.log(squared);
// Output: [4, 25, 64]
```

## Accessing the index

One reason some developers use `for` loops is to access the index the current item. Fortunately, `map` supports this by allowing you to add a second parameter. The second parameter will automatically be set to the current index.

```javascript
const squared = numbers.map((number, index) => {
    console.log(`Processing item ${index + 1}`);
    return number * number;
});
```

## map with React

As highlighted earlier, `map` is frequently used to display a list of items. The key difference is rather than returning numbers (as we did in our example) we return JSX. React has a soft requirement saying all items displayed should have a key. If the items you are displaying don't have a natural key, it's common to use the index. If we wanted to display our squared numbers in `div` elements, we could use the following:

```javascript
const squared = numbers.map((number, index) => {
    return (
        <div key={index}>{ number * number }</div>
    );
});
```

`squared` could be used in the same fashion as other variables in JSX. If we added `{ squared }` to JSX elsewhere it would render the collection of `div` elements with our updated numbers.
