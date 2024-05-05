import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";

const cartItems = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "13000.00",
    color: "Black",
    quantity: "2",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "13000.00",
    color: "Black",
    quantity: "2",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "13000.00",
    color: "Black",
    quantity: "2",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "13000.00",
    color: "Black",
    quantity: "2",
  },
];

const Cart = () => {
  return (
    <div className="flex flex-wrap m-2 mt-8 justify-center gap-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Bag</h1>
        <div className="flex mt-4 flex-col divide-y divide-gray-300">
          {cartItems.map((cartItem) => (
            <div className="flex mt-4 pt-4">
              <div>
                <img className="h-36 w-36" src={cartItem.imageSrc} alt="" />
              </div>

              <div className="ml-4 ">
                <div className="flex justify-between flex-col-reverse lg:flex-row font-semibold">
                  <h3>{cartItem.name}</h3>
                  <p className="gap-2">MRP: ₹ {cartItem.price}</p>
                </div>

                <p className="font-medium text-gray-500">Men's Golf Shoes</p>
                <p className="font-medium text-gray-500 mt-2">Quantity 1</p>

                <div className="flex gap-4 lg:pr-96 mt-8">
                  <div>
                    <IoMdHeartEmpty size={22} />
                  </div>
                  <div>
                    <RiDeleteBin6Line size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <div className="flex justify-between font-medium text-lg">
          <div className="flex gap-2 justify-center items-center">
            Subtotal <FaCircleInfo size={12} className="cursor-pointer" />
          </div>

          <span> ₹{120000}</span>
        </div>
        <div className="flex justify-between font-medium mb-4 text-lg">
          <p>Estimated Delivery & Handling</p>
          <span> ₹{1200}</span>
        </div>
        <div className="border-t border-slate-300"></div>

        <div className="flex justify-between font-medium text-lg">
          <p>Total</p>
          <span> ₹{12500}</span>
        </div>
        <div className="border-t border-slate-300"></div>
        <div className="flex flex-col gap-4 mt-10 mb-4">
          <a
            href="/signup"
            className="rounded-full bg-black text-white font-medium px-24 p-3 text-lg"
          >
            Go to Checkout
          </a>

          <a
            href="/signup"
            className="rounded-full bg-black text-white font-medium px-24 p-3 text-lg hidden lg:block"
          >
            Member Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
