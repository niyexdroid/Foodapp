import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <ul>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </ul>
  );
}
