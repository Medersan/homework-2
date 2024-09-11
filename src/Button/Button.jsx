import styles from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={styles["main-btn"]}>Add to Cart</button>
    </div>
  )
}

export default Button
