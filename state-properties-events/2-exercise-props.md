Properties (or props as they are known) allow you to pass values into components. Props are automatically available on components. You can pass props by using attributes, much in the same way you pass attribute values to normal HTML elements.

`props` is available as a property of `this` inside a component. `props` can contain as many properties as your component needs, and is capable of storing objects or any other data type.

## Scenario

To make components reusable, we typically pass the data to be displayed as props. We will do this by updating the `RecipeTitle` and `IngredientsList` components to accept properties.

## Adding title prop to RecipeTitle

1. Open the **starter** folder in Visual Studio Code as highlighted in the overview.
1. Inside Visual Studio Code, open **src/index.js**
1. Add the following code under the line `TODO: Add RecipeTitle render code`

    ```javascript
    // TODO: Add RecipeTitle render code
    render() {
        return (
            <h2>{ this.props.title }</h2>
        )
    }
    ```

    Our `RecipeTitle` has been updated to use a prop called `title`. This will be read from the `title` attribute when we use the `RecipeTitle` element.

1. Add the following code under the line `TODO: Add RecipeTitle element`

    ```javascript
    <RecipeTitle title="Mashed potatoes" />
    ```

    The `title` attribute sets the `title` property in `RecipeTitle`.

1. View the page! Open the Visual Studio Code integrated terminal by clicking **View > Terminal** or **Ctl-\`**. Run the following commands:

    ```bash
    npm install
    npm start
    ```

    > !NOTE
    > `npm install` is included to be sure all packages are installed

    You should now see the page displayed! If you change the value of `title` and refresh the page you will see it updated.
