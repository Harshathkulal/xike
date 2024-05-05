const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "13000",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    color: "Black",
  },
  // More products...
];

import { useState } from "react";
import Shoedetail from "../shoedetails/shoedetail";
import { useNavigate } from "react-router-dom";

const Shoe = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Function to handle product selection
  const handleProductSelect = (product) => {
    console.log("Selected Product:", product);
    setSelectedProduct(product);
    navigate(`/shoe/${product.id}`);
  };

  return (
    <div className=" m-4 lg:p-4">
      <div className="font-semibold">Shoes/Nike Dunk</div>

      <div className="flex justify-between mt-4">
        <div className="text-xl font-semibold">Nike Dunk Shoes</div>

        <div className="font-semibold">Sort By ^</div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="Shoe"  >
            <div className="image" onClick={() => handleProductSelect(product)}>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 flex flex-col font-semibold">
              <p className="text-[#9e1d1dcb]">Best Seller</p>
              <h3 className="font-bold ">{product.name}</h3>
              <p className="text-gray-500">{product.color}</p>
              <p className="text-gray-500">1 Colour</p>
              <p className="font-medium mb-6">MRP: $ {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Render ShoeDetail component with selected product */}
      {selectedProduct && <Shoedetail product={selectedProduct} />}
    </div>
  );
};

export default Shoe;
