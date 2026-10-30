import { Button } from "@heroui/react";

const Cartbtns = ({ restItems, emptyCart }) => {
  return (
    <div className=" flex justify-evenly">
      <Button
        onClick={emptyCart}
        className={`px-5 py-2.5 bg-red-700 rounded-md font-semibold text-md text-white `}
      >
        Empty
      </Button>
      <Button
        onClick={restItems}
        className={`px-5 py-2.5 bg-gray-600 rounded-sm font-semibold text-md text-white`}
      >
        Reset
      </Button>
    </div>
  );
};

export default Cartbtns;
