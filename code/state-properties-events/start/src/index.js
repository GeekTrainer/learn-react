import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Create IngredientList component

class RecipeTitle extends React.Component {
    // TODO: Add RecipeTitle render code
}

class Recipe extends React.Component {
    // TODO: Add constructor to create state

    // TODO: Add ingredientClick method

    render() {
        // TODO: Add prepped check
        return (
            <section>
                {/* TODO: Add RecipeTitle element */}

                {/* TODO: Add IngredientList element */}

                {/* TODO: Add prepped display */}
            </section>
        )
    }
}

ReactDOM.render(
    <article>
        <h1>Recipe manager</h1>
        <Recipe />
    </article>,
    document.getElementById('root')
);
