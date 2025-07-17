import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const CartDropdown = ({ items, onRemove }) => {
  const subTotal = items.reduce((total, item) => total + item.price, 0)
  return (
    <div className="absolute top-[40px] right-0 w-[358px] z-10">
      {items.length === 0 ? (
        <div className="p-4 bg-[#acaca1]">
          <p>There is no product.</p>
        </div>
      ) : (
        <div className="">
          <div className="p-5 bg-[#acaca1] space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-x-3 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20" />
                <div className="text-left space-y-2.5">
                  <h3 className="text-[20px]">{item.name}</h3>
                  <p className="text-[18px]">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="cursor-pointer ml-auto"
                  onClick={(e) => {
                    onRemove(item.id);
                    e.stopPropagation();
                  }}>
                  <ImCross />
                </button>
              </div>
            ))}
          </div>

          <div className="pt-[15px] px-[21px] pb-[20px] bg-white">
            <h4 className="pb-4 text-left font-medium text-gray-500">
              Subtotal:
              <span className="pl-2 font-bold text-black">${subTotal.toFixed(2)}</span>
            </h4>
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <button className="py-[14px] px-10 border-2 border-black text-black font-medium  hover:text-white hover:bg-black transition-all duration-300 cursor-pointer">
                  View Cart
                </button>
              </Link>
              <Link to={"/"}>
                <button className="py-[14px] px-10 border-2 border-black text-black font-medium hover:text-white hover:bg-black transition-all duration-300 cursor-pointer">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
