import { products } from "../../data/product.ts";
import { SetStateAction, useState } from "react";

import { Link } from "react-router-dom";
console.log(products)


const Shoe = () => {

  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products];

  if (sortOption === "priceLowToHigh") {
    sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortOption === "priceHighToLow") {
    sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } // Add more sorting options as needed


  const searchTerm="bgyy"

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

console.log(filteredProducts,"fil;ter")

  return (
    <div className="m-4 lg:p-4">
      <div className="font-semibold">Shoes/Nike Dunk</div>

      <div className="flex justify-between mt-4">
        <div className="text-xl font-semibold">Nike Dunk Shoes</div>
        <div className="font-semibold">
        Sort By{" "}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-4"
          >
            <option value="default">Feature</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            {/* Add more sorting options as needed */}
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <div key={product.id} className="Shoe">
            <Link to={`/shoe/${product.id}`}>
              <div className="image-box">
                <img
                loading="lazy"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="relative w-full h-full aspect-square rounded-lg"
                />
              </div>

              <div className="mt-4 flex flex-col font-semibold">
                <p className="text-[#9E3500]">{product.feature}</p>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.gender}</p>
                <p className="text-gray-500">1 Colour</p>
                <p className="font-medium mb-6">MRP: ₹ {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoe;
