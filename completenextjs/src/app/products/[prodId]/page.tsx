const ProductDetails = ({params}:{params: {prodId: String}}) => {
    return <h2>Details about product - {params.prodId}</h2>
}

export default ProductDetails