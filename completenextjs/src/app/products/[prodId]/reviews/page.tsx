const Reviews = () => {
    const prodList = ['Review 1', 'Review 2', 'Review 3'] 
    return (
        <>
            <h2>Review list</h2>
            {prodList.map(prod => <ul><li>{prod}</li></ul>)}
        </>
    )
}

export default Reviews