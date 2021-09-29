import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";


const PostRecipe02 = (props) => {
    const history = useHistory();
    const [ingredient, setIngredient] = useState({name: "", amount: "0"});

    const handleChange = (prop) => (event) => {
        setIngredient({...ingredient, [prop]: event.target.value});
    }
    const addIngredient = (event) => {
        event.preventDefault();
        props.setIngredients(props.ingredients.concat(ingredient));
        setIngredient({name: "", amount: "0"});
    }

    const nextStep = () => {
        history.push("/post/recipe/instructions");
    }

    return (
        <main>
            <section>
                <header className="section-header">
                    <h1>Step 2 - Add your ingredients</h1>
                </header>
                <div className="section-content">
                    <form className="form-container" onSubmit={addIngredient}>
                        <h1>Name an ingredient and its amount (in grams)</h1>
                        <div className="flex-horizontal">
                            <input aria-label="Ingredient" type="text" value={ingredient.name}
                                   onChange={handleChange("name")}
                                   placeholder="e.g: lettuce, tomato, basil,..." required/>
                            <input aria-label="Amount" type="number" value={ingredient.amount}
                                   onChange={handleChange("amount")}/>
                        </div>
                        <button type="submit">Add ingredient</button>
                    </form>
                </div>
            </section>
            <section>
                <header className="section-header">
                    <h1>Your ingredients</h1>
                </header>
                <div className="section-content">
                    <form className="form-container" onSubmit={nextStep}>
                        {props.ingredients.length > 0 ?
                            <>
                                <ul className="ingredient-list">
                                    {props.ingredients.map(ingredient => (
                                        <li className="flex-horizontal" key={ingredient.name}>
                                            <input aria-label="Ingredient" type="text" value={ingredient.name}
                                                   onChange={handleChange("name")}
                                                   placeholder="e.g: lettuce, tomato, basil,..." disabled required/>
                                            <input aria-label="Amount" type="number" value={ingredient.amount}
                                                   onChange={handleChange("amount")} disabled/>
                                        </li>
                                    ))}
                                </ul>
                                <button type="submit">Next step</button>
                            </>
                            :
                            <>
                                <em>Add something to proceed with your recipe...</em>
                                <button type="submit" disabled>Next step</button>
                            </>
                        }
                    </form>
                </div>
            </section>
        </main>
    )
}

export default PostRecipe02;