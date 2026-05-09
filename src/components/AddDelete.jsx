import { useProducts } from "../context/CartContext";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const AddDelete = ({ product }) => {
  const { handleIncrease, handleDecrease , handelDelete } = useProducts();


  return (
    <div className="flex flex-col gap-3 mt-3 items-center">

      <div className="flex flex-row gap-3">

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

          <button
          onClick={()=> handelDelete(product)}
    
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        < MdDelete size={22} />
      </button>

    </div>
  );
};

export default AddDelete;