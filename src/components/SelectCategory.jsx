import { useProducts } from "../context/CartContext";

const SelectCategory = () => {

  const { searchCategory ,  setSearchCategory,   selectCategory,   setSelectCategory,} = useProducts();
console.log(searchCategory)
  return (
    <div className="flex items-center justify-center h-[10vh] w-[100vw] ">
      <div className="flex justify-between items-center h-[2vh] w-[25vw] px-4">

      <input
  type="text"
  placeholder="find yours"
  value={searchCategory}
  onChange={(e) => {
    setSearchCategory(e.target.value);
  }}
/>

<select
  value={selectCategory}
  onChange={(e) =>   setSelectCategory(e.target.value)}
>
  <option value="">All Categories</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewelery</option>
  <option value="men's clothing">Men's Clothing</option>
  <option value="women's clothing">Women's Clothing</option>
</select>

      </div>
    </div>
  );
};
export default SelectCategory;