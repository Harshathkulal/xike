
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '13000',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

const Shoe = () => {
  return (
    <div className="w-full h-full">
      Product

      <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="image">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Shoe
