import React, {usestate} from "react";

// Adding this component so that single-reponsibility is maintained in RecipeList
function OneRecipe ({recipe, onRemove}) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td> <img src={recipe.photo} alt="" style={{objectFit: "scale-down", width:"100%", height: "100%"}} /> </td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={onRemove}>Delete</button></td>
        </tr>
    );
}
export default OneRecipe;