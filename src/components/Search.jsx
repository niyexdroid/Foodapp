import { useEffect, useState } from "react";
import styles from "./search.module.css";

// const URL = "https://api.spoonacular.com/recipes/complexSearch";
const URL = `${import.meta.env.VITE_API_URL}/complexSearch`;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      try {
        const data = await res.json();
        console.log(data);
        setFoodData(data.results);
      } catch (error) {
        console.log(error);
      }
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
