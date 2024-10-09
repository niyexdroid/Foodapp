import styles from "./ingredientsitem.module.css";
export default function IngredientsItem({ ingredient }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.ingredientImage}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt="Ingredient"
          />
        </div>
        <div className={styles.ingredientInfo}>
          <div className={styles.ingredientName} key={ingredient.id}>
            {ingredient.name}
          </div>
          <div className={styles.ingredientAmount}>
            {ingredient.amount} - {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
