import { useProducts } from  "../context/CartContext"
import ProductCard from "./ProductsCard";

const SearchProducts = () => {
  const { searchData , filteredProducts   } = useProducts();
  console.log(searchData)
  

  return (
    <>
       <div className="h-[1vh] w-fill  flex justify-center items-center">
  <div className="w-[50vw] h-[1vh]" >
   {searchData.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={filteredProducts}
      />
    ))}

</div>
/</div>
  </>
  );
};
export default SearchProducts;