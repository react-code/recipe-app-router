import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import unsplash from './api/unsplash';
import RecipeList from './components/RecipeList';
import SearchRecipe from './components/SearchRecipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('search', {
      params: { q: term, app_id: '91b215a1', app_key: 'f61331ad5c8f6115a52891035888957b'}
    });

    setRecipes(response.data.hits);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <SearchRecipe onSubmit={onSearchSubmit} />
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
