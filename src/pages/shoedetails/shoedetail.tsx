import { products } from "../../data/product.ts";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shoedetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((e) => e.id.toString() === id);

  const sizes = [
    "UK 6",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "Uk 9",
    "9.5",
    "UK 10",
  ];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectSize = (sizes) => {
    setSelectedSize(sizes);
  };

  if (!product) {
    return <div>No product found for this ID</div>;
  }

  return (
    <div className="flex mt-10 lg:p-5 justify-center flex-wrap">
      <div className="flex gap-2 ">
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

        <img src={product.imageSrc} alt={product.imageAlt} />
      </div>

      <div className="flex flex-col">
        <p>Name: {product.name}</p>
        <p>Mens Shoe</p>
        <p>Price: {product.price}</p>
        <p>incl. of taxes</p>
        <p>(Also includes all applicable duties)</p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
          <div className="flex flex-wrap gap-4">
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
        <div>
          <a
            href="/signup"
            className="rounded-full bg-black text-white font-medium px-24 p-3 text-lg"
          >
            Go to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shoedetail;
