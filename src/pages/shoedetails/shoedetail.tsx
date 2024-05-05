
const Shoedetail = (props) => {
    const product=props;
    console.log(props)
    console.log(product)
  return (
    <div>
      <div>
        image
        <img src={product.img} alt="" />
      </div>

      <div>
        product info
      </div>
    </div>
  )
}

export default Shoedetail
