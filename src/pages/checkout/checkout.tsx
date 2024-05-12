import { MdConstruction } from "react-icons/md";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex justify-center items-center m-8 py-20">
      <p className="text-xl font-bold">Under Construction</p>
      <MdConstruction size={48} />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Checkout;
