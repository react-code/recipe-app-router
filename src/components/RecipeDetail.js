import React from 'react';
import { Link } from "react-router-dom";

const RecipeDetail = (props) => {
    console.log(props);
    const recipe = props.location.state.recipe;
    return (
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-md-4">
                    <div className="recipe-box mb-5">
                        <img src={recipe.image} alt={recipe.label} className="img-fluid w-100" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="recipe-info">
                        <h2 className="text-white">{recipe.label}</h2>
                        <h5 className="text-white calories mt-4">
                            <span className="cal-name">{Math.round(recipe.calories)}</span>
                            <span className="unit d-block">cal</span>
                        </h5>
                    </div>

                    <div className="d-flex align-items-center ml-4 mt-4">
                        <Link to="/"><button className="btn btn-danger">Go back to home</button></Link>
                        <a href={recipe.url} target="_blank" className="text-white ml-3" style={{textDecoration: 'underline'}}>View full recipe</a>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h4>Nutrition:</h4>
                    <p className="mb-4">
                        {
                            recipe.healthLabels.length > 0 && recipe.healthLabels.map((health, index) => (
                                <span key={index}>{health},</span>
                            ))
                        }
                    </p>

                    <table className="table table-bordered">
                        <tbody>
                        {
                            recipe.digest.length > 0 && recipe.digest.map((digest, index) => (
                                <tr key={index}>
                                    <td className="text-white">{digest.label}</td>
                                    <td className="text-white">{Math.round(digest.daily)} {digest.unit} (Daily)</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    <h4 className="text-white ml-4">{recipe.ingredients.length} Ingredients</h4>
                    <ul className="ingredients">
                        {recipe.ingredients.map((ingre, index) => (
                            <li key={index}>{ingre.text} - {ingre.weight}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;