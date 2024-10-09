import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import IngredientsList from "./ingredientsList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const URL = `${import.meta.env.VITE_API_URL}/${foodId}/information`;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const fetchFood = async () => {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setFood(data);
        setIsLoading(false); // set loading to false
      } catch (error) {
        console.log(error);
      }
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

// import { useState, useEffect } from "react";
// import styles from "./Fooddetails.module.css";
// import IngredientsList from "./ingredientsList";

// export default function FoodDetails({ foodId }) {
//   const [food, setFood] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const apiUrl = `${import.meta.env.VITE_API_URL}/${foodId}/information`;
//     const apiKey = import.meta.env.VITE_API_KEY;

//     const fetchFood = async () => {
//       const res = await fetch(`${apiUrl}?apiKey=${apiKey}`);
//       const data = await res.json();
//       console.log(data);
//       setFood(data);
//       setIsLoading(false);
//     };
//     fetchFood();
//   }, [foodId]);

//   return (
//     <div>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className={styles.recipeCard}>
//           {food && (
//             <>
//               <h1 className={styles.recipeName}>{food.title}</h1>
//               <img src={food.image} className={styles.recipeImage} alt="" />

//               <div className={styles.recipeDetails}>
//                 <span>
//                   <strong> {food.readyInMinutes} minutes, </strong>
//                 </span>
//                 <span>
//                   👨‍👩‍👧‍👦<strong> Serves {food.servings}</strong>
//                 </span>
//                 <span>
//                   <strong>
//                     {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
//                   </strong>
//                 </span>
//                 <span>
//                   <strong>{food.vegan ? "🐮 vegan" : ""}</strong>
//                 </span>
//               </div>
//               <div>
//                 <span>
//                   <strong>
//                     $ {(food.pricePerServing / 100).toFixed(2)} Per Serving
//                   </strong>
//                 </span>
//               </div>
//               <div>
//                 <h2>Ingredients</h2>
//                 <IngredientsList ingredients={food.extendedIngredients} />
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
