const Docs = ({params}:{params : {
    name : String[]
}}) => {
    if(params.name?.length === 2){
        return <h2> Viewing docs for feature {params.name[0]} and concept {params.name[1]} </h2>
    }else if(params.name?.length === 1){
        return <h2>Viewing docs for feature {params.name[0]}</h2>
    }
    return <h1>Documents page...</h1>
}

export default Docs