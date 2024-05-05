import { products } from "../../data/product.ts";
import { useParams } from "react-router-dom";

const Shoedetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>No product found for this ID</div>;
  }

  return (
    <div className="flex">
      <div>
        <img src={product.imageSrc} alt={product.imageAlt} />
      </div>

      <div>
        <p>Name: {product.name}</p>
        <p>Mens Shoe</p>
        <p>Price: {product.price}</p>
        <p>incl. of taxes</p>
        <p>(Also includes all applicable duties)</p>
      </div>
    </div>
  );
};

export default Shoedetail;
