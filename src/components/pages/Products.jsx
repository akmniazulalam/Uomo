import { FaShoppingCart } from "react-icons/fa";
import ProductList from "./components/ProductList";
import products from "./data/products";
import { useEffect, useRef, useState } from "react";
import CartDropdown from "./components/CartDropdown";

const Products = () => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const dropdownRef = useRef(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const alreadyExists = prevItems.find((item) => item.id === product.id);

      if (alreadyExists) {
        return prevItems;
      }

      return [...prevItems, product];
    });
  };

  const removeHandle = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const clickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <section className="max-w-[1170px] m-auto pt-9">
      <div className="relative text-center" ref={dropdownRef}>
        <div className="text-end" onClick={() => setShowCart(!showCart)}>
          <button className="mb-9">
            <FaShoppingCart className="text-2xl inline-block mr-2 cursor-pointer" />
            {cartItems.length > 0 && cartItems.length}
          </button>
        </div>
        {showCart && <CartDropdown items={cartItems} onRemove={removeHandle} />}
      </div>
      <ProductList products={products} addToCart={addToCart} />
    </section>
  );
};

export default Products;
