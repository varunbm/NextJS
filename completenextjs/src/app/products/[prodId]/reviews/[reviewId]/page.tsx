const ReviewDetails = ({params}:{params:{
    prodId: String,
    reviewId: String
}}) => {
    return <h2>Review {params.reviewId} of the Product {params.prodId} </h2>
}

export default ReviewDetails