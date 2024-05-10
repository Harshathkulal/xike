import { products } from "../../data/product.ts";

import { Link } from "react-router-dom";

const Shoe = () => {
  return (
    <div className="m-4 lg:p-4">
      <div className="font-semibold">Shoes/Nike Dunk</div>

      <div className="flex justify-between mt-4">
        <div className="text-xl font-semibold">Nike Dunk Shoes</div>
        <div className="font-semibold">Sort By ^</div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="Shoe">
            <Link to={`/shoe/${product.id}`}>
              <div className="image-box">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="relative w-full h-full aspect-square rounded-lg"
                />
              </div>

              <div className="mt-4 flex flex-col font-semibold">
                <p className="text-[#9e1d1dcb]">Best Seller</p>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.color}</p>
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
