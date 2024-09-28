import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ee6c0ea31d2845a89597c4d3de54a701";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
