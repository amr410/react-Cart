import { Button } from "@heroui/react";

const ItemsButtons = ({ increment, decrement, id, items, deleteIteam }) => {
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
      <Button
        onClick={() => deleteIteam(id)}
        className="bg-red-600 p-1.5 px-2 rounded-full border border-black"
      >
        del
      </Button>
    </div>
  );
};

export default ItemsButtons;
