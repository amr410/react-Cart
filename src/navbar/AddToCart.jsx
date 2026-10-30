import { ShoppingCartPlus, ShoppingCart } from "lucide-react";

const AddToCart = ({ cartCount, theme }) => {
  return (
    <div className="flex gap-5">
      <button
        type="button"
        aria-label={`Shopping cart, ${cartCount} items`}
        className={`relative rounded-full p-2 
        transition ${theme ? "text-gray-700 hover:bg-gray-300" : "text-white hover:bg-gray-700"}`}
      >
        {cartCount == 0 ? (
          <ShoppingCartPlus size={26} strokeWidth={1.8} />
        ) : (
          <ShoppingCart size={26} strokeWidth={1.8} />
        )}

        {cartCount > 0 && (
          <span
            className="absolute -right-1 -top-1 flex h-5 min-w-5
            items-center justify-center rounded-full bg-red-500
            px-1 text-xs font-bold text-white"
          >
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default AddToCart;
