import Button from "../Button/Button";
import styles from "./CardPage.module.css"

function CardPage({image,name,stars,count,priceCents,keywords}) {
  return (
    <div className={styles["card-page_wrapper"]}>
      <div className={styles["card-page_img"]}>
        <img src={image} alt="not found image" />
      </div>
      <div>
        <p className={styles["card-page_title"]}>{name?.slice(0,45)}...</p>
      </div>
      <div className={styles["card-page_rating"]}>
        <img
          src={`src/data/ratings/rating-${Math.round(stars * 10)}.png`}
          alt=".data/ratings/rating-0.png"
        />
        <p>{count}</p>
      </div>
      <div className={styles["card-page_amount"]}>
        <p>{priceCents}</p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="card-page_button">
        <Button />
      </div>
    </div>
  );
}

export default CardPage;