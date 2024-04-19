const Products = () => {
    const prodList = ['Prod 1', 'Prod 2', 'Prod 3'] 
    return (
        <>
            <h2>Products list</h2>
            {prodList.map(prod => <ul><li>{prod}</li></ul>)}
        </>
    )
}

export default Products