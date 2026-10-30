import ItemsButtons from "./ItemsButtons";

const Items = ({
  product: { id, name, price, items },
  theme,
  increment,
  decrement,
  deleteItem,
}) => {
  return (
    <div
      dir="rtl"
      className={`flex  justify-evenly items-center text-lg gap-8 border ${
        theme
          ? " border-black bg-gray-100 p-2 text-black"
          : " border-black bg-gray-800 p-2 text-white"
      }`}
    >
      <span className="font-semibold">{name}</span>
      <span>{items}</span>

      <span>{price}</span>
      <ItemsButtons
        id={id}
        items={items}
        increment={increment}
        decrement={decrement}
        deleteItem={deleteItem}
      />
      <span>Total : {items * price}</span>
    </div>
  );
};

export default Items;
