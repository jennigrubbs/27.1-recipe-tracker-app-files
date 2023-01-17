import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (addRecipe) => setRecipes((recipes) => [...recipes, addRecipe])
  const handleRemoveRecipe = indexToRemove => {
    const newRecipes = recipes.filter((aRecipe, index) => index !== indexToRemove)
    setRecipes(newRecipes)
  }
  
  return (
    <div className="App">
      <header><h1 style={{fontSize: "64px", fontFamily: "Playfair Display SC", textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onRemove={handleRemoveRecipe}/>
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
