import React from 'react';
import { Link } from "react-router-dom";

const RecipeList = (props) => {
    return (
        <div className="row mt-5 pt-5">
            {
                (props.recipes && props.recipes.length > 0) ? 
                    props.recipes.map(recipe => {
                        return(
                            <div className="col-md-4" key={recipe.recipe.label}>
                                <div className="recipe-section">
                                    <img src={recipe.recipe.image} alt={recipe.recipe.label} className="img-fluid" />
                                    <div className="recipe-detail">
                                        <h5 className="mb-4">{recipe.recipe.label}</h5>
                                        <Link to={{
                                                pathname: `/recipe/${recipe.recipe.label.replace(/\s+/g, '-').toLowerCase()}`,
                                                state: recipe,
                                                recipe: recipe.recipe
                                            }}><button className="btn btn-primary">View</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : (<div className="no-recipes">There are no recipes to display</div>)
            }

        </div>
                // props.recipes.map((recipe) => (
                //     <RecipeDetail key={recipe.recipe.calories} recipe={recipe} />
                // )) : (<div className="no-recipes">There are no recipes to display</div>)}
    )
}

export default RecipeList;