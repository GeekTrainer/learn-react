import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

class IngredientList extends React.Component {
    render() {
        const ingredients = [
            '3 potatoes, cut into 1/2" pieces',
            '4 Tbsp butter',
            '1/8 cup heavy cream',
            'Salt',
            'Pepper'
        ];

        // Create the list items using map
        const ingredientListItems = ingredients.map((ingredient, index) => {
            return (
                <li key={index}>{ ingredient }</li>
            )
        });

        return ( // Generate the returned HTML
            <ul>
                { ingredientListItems }
            </ul>
        );
    }
}

class RecipeTitle extends React.Component {
    render() {
        const title = 'Mashed potatoes';
        return (
            <h2>{ title }</h2>
        )
    }
}

ReactDOM.render(
    <article>
        <h1>Recipe manager</h1>
        <RecipeTitle />
        <IngredientList />
    </article>,
    document.getElementById('root')
);
