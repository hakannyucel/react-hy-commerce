const Product = ({id, name, code, price}) => {
    return (
        <div className="rounded border-[0.5px] border-gray-300 flex flex-col justify-center transition-all hover:shadow-xl hover:border-gray-400 hover:scale-[1.01]">
        <a href={`/${id}`}>
            <img src={`https://picsum.photos/200/300`} alt="" className="max-w-[150px] sm:max-w-none" />
        </a>
        <div className="flex flex-col gap-4 p-4">
            <a href={`/${code}`} className="font-bold">{name}</a>
            <span>{price} TL</span>
        </div>
        </div>
    )
}

export default Product;