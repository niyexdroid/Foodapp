import styles from "./FoodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setFoodId(food.id)}
          id={food.id}
          className={styles.itemButtom}
        >
          {" "}
          View Recipe
        </button>
      </div>
    </div>
  );
}
