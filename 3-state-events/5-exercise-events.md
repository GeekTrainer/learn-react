Storing state in the core component of our application (`Recipe`) allows us to read the current values of all important properties without having to interact with each individual component. We can also centralize events, ensuring data is only modified in one location.

## Scenario

We want to allow the user of the application to tap on the ingredient list as they complete each item. We will mark the item as `prepared` in the state, which will be reflected across the entire application. When the values change, the component will detect the updates and reevaluate as needed.

## Add the method for click events

1. Open **App.jsx**
1. Create an event listener named `ingredientClick` under the comment which reads `TODO: Create ingredientClick event listener`

    ```javascript
    function ingredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }
    ```

    The logic starts by creating a copy of `recipe` by using the spread operator. We then retrieve the updated `ingredient` by using the `index` and reverse the value of `prepared`. We finish by replacing the `recipe` object in state by using `setRecipe`.

1. Add `IngredientList`, a component which displays the ingredients of a recipe, by adding the following code after the comment which reads `TODO: Pass ingredients and event listener to IngredientList`:

    ```jsx
    <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
    ```

    Notice we can pass the `ingredientClick` function as we would any other prop to a component.

## Update IngredientList to use event listener

In React, properties (or props) can be any JavaScript type, including functions. As a result, we can setup an event handler as a prop. This allows us to centralize event handling. Let's update `IngredientList` to use `ingredientClick` we created earlier.

1. Open **IngredientList.jsx**. Notice the existing component. We will use this to demonstrate how to use events.
1. Below the comment which reads `TODO: Add onClick event` add the following JSX:

    ```jsx
    onClick={ () => props.onClick(index) }
    ```

    Notice we are able to pass a parameter into the prop `onClick` function.

    > ![NOTE]
    > There is nothing special about the name`onClick` being used on the component's `props`. It was the name we chose, and was passed in earlier from **App.jsx**.

## Test the page

1. Save all files.
1. Return to the browser and refresh the page. You should notice if you click on the ingredients the line-through status will change (as the `prepared` property is being updated).
