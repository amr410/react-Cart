import Cartbtns from "./Cartbtns";
import Items from "./Items";

const Cart = ({
  products,
  theme,
  increment,
  decrement,
  restItems,
  emptyCart,
  deleteItem,
}) => {
  const total = products.reduce(
    (sum, product) => sum + +product.items * +product.price,
    0,
  );

  return (
    <div
      className={`flex justify-start gap-5 flex-col h-screen ${
        theme ? "bg-gray-200" : "bg-gray-900"
      }`}
    >
      <h1
        className={`text-center font-bold text-3xl ${
          theme ? "text-gray-900" : "text-gray-200"
        }`}
      >
        Cart
      </h1>

      <Cartbtns restItems={restItems} emptyCart={emptyCart} />

      {products.length === 0 ? (
        <h1 className="text-red-600 text-center font-bold text-2xl">EMPTY</h1>
      ) : (
        products.map((product, index) =>
          product.length === 0 ? (
            <div key={index}></div>
          ) : (
            <Items
              key={product.id}
              theme={theme}
              product={product}
              increment={increment}
              decrement={decrement}
              deleteItem={deleteItem}
            />
          ),
        )
      )}
      {products.length === 0 ? (
        <h1></h1>
      ) : (
        <span
          className={`text-center mt-2.5 text-lg font-bold ${theme ? "text-black" : "text-white"}`}
        >
          Total : {total}
        </span>
      )}
    </div>
  );
};

export default Cart;
