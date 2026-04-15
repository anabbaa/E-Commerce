import { useProducts } from "../context/CartContext";

const SelectCategory = () => {

  const { searchItem,  setSearchItem,   selectCategory,   setSelectCategory,} = useProducts();


  return (
    <div className="flex items-center justify-center h-[10vh] w-[100vw]">
      <div className="flex justify-between items-center h-[5vh] w-[25vw] px-4">

        <input
          type="text"
          placeholder="find yours"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <select
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
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