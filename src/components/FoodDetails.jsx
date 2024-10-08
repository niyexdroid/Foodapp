import styles from "./Fooddetails.module.css";
import { useEffect, useState } from "react";
import IngredientsList from "./ingredientsList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ee6c0ea31d2845a89597c4d3de54a701";
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    };
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} className={styles.recipeImage} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>🕰️ {food.readyInMinutes} minutes, </strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}{" "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              $ {(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          <IngredientsList
            ingredients={food.extendedIngredients}
            isLoading={isLoading}
          />

          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading
                ? "Loading..."
                : food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
