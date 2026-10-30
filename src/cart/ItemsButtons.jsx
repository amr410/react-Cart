import { Button } from "@heroui/react";
import { X } from "lucide-react";
const ItemsButtons = ({
  increment,
  decrement,
  id,
  items,
  deleteItem,
  theme,
}) => {
  return (
    <div className=" flex gap-8 font-bold text-white">
      <Button
        onClick={() => increment(id)}
        className="bg-emerald-700 p-1.5 px-3 rounded-full border border-black"
      >
        +
      </Button>
      <Button
        onClick={() => decrement(id)}
        className="bg-red-800 p-1.5 px-4 rounded-full border border-black"
        isDisabled={items == 1}
        variant="danger"
      >
        -
      </Button>
      <X
        onClick={() => deleteItem(id)}
        className={`mt-3 rounded-full ${theme ? "text-gray-600 hover:bg-gray-300 hover:text-red-700" : "hover:bg-gray-700  hover:text-red-800"}  `}
      ></X>
    </div>
  );
};

export default ItemsButtons;
