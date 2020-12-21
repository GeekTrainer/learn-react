import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Create IngredientList component
class IngredientList extends React.Component {
    render() {
        // Create the list items using map
        const ingredientListItems = this.props.ingredients.map((ingredient, index) => {
            return (
                <li key={index}
                    className={ingredient.prepped ? 'prepped clickable' : 'clickable'}
                    onClick={() => this.props.ingredientClick(ingredient)}
                >
                    { ingredient.name}
                </li>

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
    // TODO: Add RecipeTitle render code
    render() {
        return (
            <h2>{this.props.title}</h2>
        )
    }
}

class Recipe extends React.Component {
    // TODO: Add constructor to create state
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [
                { name: '3 potatoes, cut into 1/2" pieces', prepped: false },
                { name: '4 Tbsp butter', prepped: false },
                { name: '1/8 cup heavy cream', prepped: false },
                { name: 'Salt', prepped: false },
                { name: 'Pepper', prepped: false },
            ],
        };
    }

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

    render() {
        // TODO: Add prepped check
        const prepped = this.state.ingredients.findIndex(i => !i.prepped) > -1;
        return (
            <section>
                {/* TODO: Add RecipeTitle element */}
                <RecipeTitle title='Mashed potatoes' />

                {/* TODO: Add IngredientList element */}
                <IngredientList
                    ingredients={this.state.ingredients}
                    // TODO: Add click parameter
                    ingredientClick={(ingredient) => this.ingredientClick(ingredient)}
                />

                {/* TODO: Add prepped display */}
                { prepped ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}
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
