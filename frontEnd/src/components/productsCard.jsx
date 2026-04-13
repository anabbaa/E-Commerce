
import Button from "./Button";
import { card } from "../styles/globals";

const  ProductCard = ({ product  , onClick }) => {
  
  return (
    <div key={product.id} className={card.cardWrapper}>
      <div className={card.imageWrapper}> 
        <img src={product.image} alt={product.name} className={card.image} />
      </div>

      <section className={card.content}>
        <h3 className={card.title}>{product.name}</h3>
        <p className={card.description}>{product.description}</p>

        <div className={card.priceRatingContainer}>
          <span className={card.price}>
            {product.price} {product.currency}
          </span>
          <span className={card.rating}>⭐ {product.rating}</span>
        </div>

        <div className="flex justify-between">
          <Button onClick={() => onClick(product)}>
              Add To Cart
              </Button>
          <Button variant="removeFromCart" size="xs" rounded="sm" shadow="sm">
            Remove
          </Button>
          <Button variant="viewDetails" size="xs" rounded="sm" shadow="sm">
            View More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;