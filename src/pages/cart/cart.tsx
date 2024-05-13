import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export interface CartItem {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  size: string;
  quantity: number;
}

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };
  const subtotal = calculateSubtotal();

  const estimatedTax = () => {
    return subtotal * 0;
  };
  const estimatedtax = estimatedTax();

  const OrderTotal = () => {
    return subtotal + estimatedtax;
  };
  const ordertotal = OrderTotal();

  const handleRemove = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="flex flex-wrap m-2 mt-8 justify-center gap-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Bag</h1>
        {cartItems.length === 0 ? (
          <div className="mr-10">
            <p className="text-gray-500">There are no items in your bag.</p>
            <Link
              to="/shoe/"
              className="text-xs flex items-center mt-4 font-medium"
            >
              Continue Shopping <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="flex mt-4 flex-col divide-y divide-gray-300">
            {cartItems.map((cartItem, index) => (
              <div key={index} className="flex mt-4 pt-4">
                <div>
                  <img className="h-36 w-36" src={cartItem.imageSrc} alt="" />
                </div>

                <div className="ml-4 ">
                  <div className="flex justify-between flex-col-reverse lg:flex-row font-semibold">
                    <h3>{cartItem.name}</h3>
                    <p className="gap-2">MRP: ₹ {cartItem.price}</p>
                  </div>

                  <p className="font-medium text-gray-500">Men's Golf Shoes</p>
                  <p className="font-medium text-gray-500 mt-2">
                    Size:{cartItem.size}
                  </p>
                  <p className="font-medium text-gray-500 mt-2">
                    Quantity:{cartItem.quantity}
                  </p>

                  <div className="flex gap-4 lg:pr-96 mt-8">
                    <button>
                      <IoMdHeartEmpty size={22} />
                    </button>
                    <button className="cursor-pointer">
                      <RiDeleteBin6Line
                        onClick={() => handleRemove(cartItem)}
                        size={22}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <div className="flex justify-between font-medium text-lg">
          <div className="flex gap-2 justify-center items-center">
            Subtotal <FaCircleInfo size={12} className="cursor-pointer" />
          </div>

          <span> ₹{subtotal}</span>
        </div>
        <div className="flex justify-between font-medium mb-4 text-lg">
          <p>Estimated Delivery & Handling</p>
          <span> ₹{"Free"}</span>
        </div>
        <div className="border-t border-slate-300"></div>

        <div className="flex justify-between font-medium text-lg">
          <p>Total</p>
          <span> ₹{ordertotal}</span>
        </div>
        <div className="border-t border-slate-300"></div>
        <div className="flex flex-col gap-4 mt-10 mb-4">
          <Link
            to="/checkout"
            className="rounded-full bg-black text-white font-medium px-24 p-3 text-lg"
          >
            Go to Checkout
          </Link>

          <Link
            to="/checkout"
            className="rounded-full bg-black text-white font-medium px-24 p-3 text-lg hidden lg:block"
          >
            Member Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
