import { products } from "../../data/product.ts";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shoedetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((e) => e.id.toString() === id);

  const sizes: string[] = [
    "UK 6",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "Uk 9",
    "9.5",
    "UK 10",
  ];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSelectSize = (sizes: string | null) => {
    setSelectedSize(sizes);
  };

  if (!product) {
    return <div>No product found for this ID</div>;
  }

  return (
    <div className="flex mt-10 lg:p-5 justify-between lg:justify-around m-4 flex-wrap lg:px-24">
      <div className="lg:hidden">
        <p className="text-2xl font-medium">{product.name}</p>
        <p className="font-medium">Men's Shoes</p>
        <p className="mt-3 font-semibold text-lg">MRP: ₹{product.price}</p>
        <p className="text-gray-500 font-medium">incl. of taxes</p>
        <p className="text-gray-500 font-medium">
          (Also includes all applicable duties)
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <div className="lg:flex flex-col gap-2 hidden">
          <img
            className="w-16 h-16 rounded-lg "
            src={product.imageSrc}
            alt={product.imageAlt}
          />
          <img
            className="w-16 h-16 rounded-lg "
            src={product.imageSrc}
            alt={product.imageAlt}
          />
          <img
            className="w-16 h-16 rounded-lg "
            src={product.imageSrc}
            alt={product.imageAlt}
          />
          <img
            className="w-16 h-16 rounded-lg "
            src={product.imageSrc}
            alt={product.imageAlt}
          />
        </div>
        <div>
          <img
            className="size-96 rounded-lg"
            src={product.imageSrc}
            alt={product.imageAlt}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="hidden lg:block">
          <p className="text-2xl">{product.name}</p>
          <p className="font-medium">Men's Shoes</p>
          <p className="mt-3 font-semibold text-lg">MRP: ₹{product.price}</p>
          <p className="text-gray-500 font-medium">incl. of taxes</p>
          <p className="text-gray-500 font-medium">
            (Also includes all applicable duties)
          </p>
        </div>

        <div className="lg:mt-20 mt-8">
          <div className="flex justify-between mx-4">
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <h3 className="text-lg font-semibold mb-2 text-gray-500">
              Size Guide
            </h3>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-1">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectSize(size)}
                  className={`border rounded-md px-6 p-2 ${
                    selectedSize === size ? "border-2 border-black" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex flex-col gap-3">
            <div className="rounded-full bg-black text-white font-medium px-28 p-3 py-4 text-lg">
              Add to Bag
            </div>

            <div className="rounded-full text-black border border-black font-medium px-28 p-3 py-4 text-lg">
              Favourite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoedetail;
