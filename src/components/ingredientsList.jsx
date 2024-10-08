import IngredientsItem from "./ingredientsItem";

export default function IngredientsList({ ingredients, isLoading }) {
  return (
    <div>
      {isLoading
        ? "Loading..."
        : ingredients.map((ingredient) => (
            <IngredientsItem key={ingredient.id} ingredient={ingredient} />
          ))}
    </div>
  );
}
