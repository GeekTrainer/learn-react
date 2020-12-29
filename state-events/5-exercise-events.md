Storing state in the core component of our application (`Recipe`) allows us to read the current values of all important properties without having to interact with each individual component. We can also centralize events, ensuring data is only modified in one location.

## Scenario

We want to allow the user of the application to tap on the ingredient list as they complete each item. When the list is complete the display will update to show them they're done with their prep work.

## Add the method for click events

The `Recipe` component will be responsible for handling click events for each displayed ingredient. We add a method to the component, which we will later pass into the `IngredientList` component. The event listener should locate the clicked ingredient, and reverse the current value of `prepped`.

1. Add `ingredientClick` method to `Recipe`. Add the following code below the line which reads `TODO: Add ingredientClick method`

    ```javascript
    // TODO: Add ingredientClick method
    ingredientClick(ingredient) {
        // create a new copy of the array
        const ingredients = this.state.ingredients.slice();
        // overwrite the value of the ingredient
        ingredients[ingredients.indexOf(ingredient)] = {
            ...ingredient, // copy existing values
            prepped: !ingredient.prepped // reverse prepped status
        };
        // store the new copy of the array
        this.setState({ ingredients: ingredients });
    }
    ```

    As discussed in earlier we don't update state directly, but rather we create a new copy, change the necessary values, and replace the existing instance in state.

    The first line of code creates a copy of the array by calling `slice`. We then locate the `ingredient` inside the array by using `indexOf` to set it to the new value. We use `...ingredient` to copy the existing properties, and then use `!ingredient.prepped` to reverse the current value of `prepped`.

    Finally, we call `setState` to overwrite the existing `ingredients` in sate with our new value.

    > !NOTE
    > As you might suspect, responding to events and updating state is something you will do in almost every React application you create. In this module we focused on the built-in mechanisms for performing these actions. There are additional libraries, such as Redux, which can help better manage state and events.

## Add the ingredientClick attribute

With our method created, we need to update our call to `IngredientList` to use the method.

1. Locate the comment which reads `TODO: Add click parameter` inside `render` and add the following code:

    ```javascript
    // TODO: Add click parameter
    ingredientClick={(ingredient) => this.ingredientClick(ingredient)}
    ```

    The entire `IngredientClick` element should look like the following:

    ```javascript
    <IngredientList
        ingredients={this.state.ingredients}
        // TODO: Add click parameter
        ingredientClick={(ingredient) => this.ingredientClick(ingredient)}
    />
    ```

    Notice we are using the same syntax discussed before to create an anonymous function, which ensures `this` refers to the current component inside `ingredientClick`.

## Update onClick in the IngredientList component

The `IngredientList` component needs to be updated to call the function. We passed it in as a prop, so we'll be able to retrieve it from `this.props`. We will pass in the current `ingredient`, so the correct item is updated.

1. Inside the `IngredientList` component, locate the comment which reads `TODO: Add click event handler`. Add the following code:

    ```javascript
    // TODO: Add click event handler
    onClick={() => this.props.ingredientClick(ingredient)}
    ```

    The `map` function should now look like the following:

    ```javascript
    const ingredientListItems = this.props.ingredients.map((ingredient, index) => {
        return (
            <li key={index}
                className={ingredient.prepped ? 'prepped clickable' : 'clickable'}
                // TODO: Add click event handler
                onClick={() => this.props.ingredientClick(ingredient)}
            >
                { ingredient.name}
            </li>

        )
    });
    ```

    Notice we can pass the current `ingredient` as a parameter to `ingredientClick`. This ensures as each `ingredient` is tapped it will have its state updated.

## Update the display to include the overall prep status

We want to display a message below the list of ingredients when the prep work is complete. We will do this by looking at the list of ingredients in the state, and searching for anything where `prepped` is currently false. We use `findIndex` to do this, as it accepts a delegate where we can implement our own search logic.

1. Inside `render`, add the following code below the comment `TODO: Add prepped check`

    ```javascript
    // TODO: Add prepped check
    const prepped = this.state.ingredients.findIndex(i => !i.prepped) > -1;
    ```

    `findIndex` allows for a search function. We look for any items set where `prepped` is `false`. `findIndex` returns the index of the first found item, or `-1` if no items are found.

1. Add the display to the page by adding the following code below the comment `TODO: Add prepped display`

    ```javascript
    {/* TODO: Add prepped display */}
    { prepped ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}
    ```

    This uses JavaScripts ternary syntax to decide which item to display.

## Test your site

Ensure all files are saved and return to your browser. Click refresh. You should now see **Just keep chopping** at the bottom. If you tap on the ingredients you should notice you can toggle the strike-through display. Finally, if you tap each item so they're marked as prepped the display at the bottom will update to **Prep work done!**.
