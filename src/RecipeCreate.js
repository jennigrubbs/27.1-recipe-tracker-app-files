import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // get the basic form without data set up
  const howFormStarts = { name: "", cuisine: "", photo: "", ingredients: "", preparation: "" }
  // include useState
  const [formData, setFormData] = useState({...howFormStarts});
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    createRecipe({...formData});
    setFormData({...howFormStarts})
  }
  // update the return section of the code
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
        <td>
          <input name="name" id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required={true}/>
        </td>
        <td>
          <input name="cuisine" id="cuisine" type="text" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required={true}/>
        </td>
        <td>
          <input name="photo" id="photo" type="text" value={formData.photo} onChange={handleChange} placeholder="URL" required={true}/>
        </td>
        <td>
          <textarea name="ingredients" id="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" rows={3} required={true}/> 
        </td>
        <td>
          <textarea name="preparation" id="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation" rows={3} required={true}/>
        </td>
        <td>
          <button type="submit">Create</button>
        </td>
      </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
