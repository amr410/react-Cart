import Brand from "./Brand";
import AddToCart from "./AddToCart";
import ChangeThemeBtn from "./ChangeThemeBtn";
import AddableItems from "./AddableItems";

function Navbar({
  changeTheme,
  theme,
  setTheme,
  products,
  headerProducts,
  addItem,
}) {
  const cartCount = products.reduce(
    (total, product) => total + product.items,
    0,
  );
  return (
    <nav
      dir="rtl"
      className={`flex items-center justify-between border-b
        ${theme ? "bg-gray-100 border-gray-300" : "bg-gray-800 text-white border-gray-950 "}  px-6 py-4 shadow-sm`}
    >
      {/* Logo and site name — right side */}
      <Brand theme={theme} />
      {/* add items - middle*/}
      <div className="flex justify-center items-center gap-6">
        {headerProducts.map((product) => {
          return (
            <AddableItems
              key={product.id}
              addItem={addItem}
              theme={theme}
              product={product}
            />
          );
        })}
      </div>

      {/* Shopping cart — left side */}
      <div className="flex gap-2">
        <ChangeThemeBtn
          changeTheme={changeTheme}
          theme={theme}
          setTheme={setTheme}
        />
        <AddToCart theme={theme} cartCount={cartCount} />
      </div>
    </nav>
  );
}

export default Navbar;
