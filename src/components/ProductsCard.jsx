
import Button from "./Button";
import { card } from "../styles/globals";
import { useNavigate } from "react-router-dom";

const  ProductCard = ({ product, onAddToCart  }) => {
  const navigate = useNavigate()
  
  return (
    <div key={product.id} className={card.cardWrapper}>
      <div className={card.imageWrapper}> 
        <img src={product.image} alt={product.name} className={card.image} />
      </div>

      <section className={card.content}>
        <h3 className={card.title}>{product.name}</h3>
        <p className={`${card.description} h-[33]`}>{product.description}</p>

        <div className={card.priceRatingContainer}>
          <span className={card.price}>
            {product.price} {product.currency}
          </span>
          <span> still {product.stock} pieces </span>
          <span className={card.rating}>⭐ {product.rating}</span>
        
        </div>

        <div className="flex justify-between">
          <Button   onClick={()=> onAddToCart(product) } disabled={product.stock  === 0 }  >
              Add To Cart
              </Button>
<Button onClick={() => navigate(`/viewmore/${product.id}`)}
variant="viewDetails" size="xs" rounded="sm" shadow="sm"  >
  View More
</Button>
                </div>
      </section>
    </div>
  );
};

export default ProductCard;