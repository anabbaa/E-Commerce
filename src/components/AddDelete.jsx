import { useProducts } from "../context/CartContext";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const AddDelete = ({ product }) => {
  const { handleIncrease, handleDecrease } = useProducts();

  return (
    <div className="flex flex-row gap-3 mt-3 items-center">

      <button
        onClick={() => handleIncrease(product)}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        <BsPlus />
      </button>

      <p className="font-bold">{product.quantity}</p>

      <button
        onClick={() => handleDecrease(product)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        <FiMinus />
      </button>

    </div>
  );
};

export default AddDelete;