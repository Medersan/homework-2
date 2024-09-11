import CardPage from "./CardPage/CardPage"
import { products } from "./data/data"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles["app"]}>
    {products.map((product)=>(
      <CardPage 
      name={product.name}
      key={product.id}
      image={product.image}
      stars={product.rating.stars}
      count={product.rating.count}
      priceCents={product.priceCents}
      />
    ))}
    </div>
  )
}

export default App
