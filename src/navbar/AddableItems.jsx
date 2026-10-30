import { Button } from "@heroui/react";

const AddableItems = ({ product: { id, name }, theme, addItem }) => {
  return (
    <div>
      <Button
        onClick={() => {
          addItem(id);
        }}
        size="lg"
        className={`border  ${
          theme
            ? " border-black bg-gray-200 p-2 text-black"
            : " border-black bg-gray-700 p-2 text-white"
        }`}
      >
        {name}
      </Button>
    </div>
  );
};

export default AddableItems;
