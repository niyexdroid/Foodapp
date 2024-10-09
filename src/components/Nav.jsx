import styles from "./nav.module.css";
export default function Nav() {
  return (
    <div className={styles.nav}>
      <h3>🍲Food App</h3>
      <h5>
        <em>Search for your favorite dish below...</em>
      </h5>
    </div>
  );
}
