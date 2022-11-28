import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { doc, getDoc } from "@firebase/firestore";

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            const productRef = doc(db, "products", id);
            const prod = await getDoc(productRef);
            setProduct(prod.data());
        }

        getProduct();
    }, [])

    const handleSubmit = () => {
        setProduct({...product, quantity: product.quantity - 1});
    }

    return (
        <div className="container mx-auto flex flex-col sm:flex-row mt-12 sm:mt-0">
            <div className="flex-[2] flex justify-center items-center">
                <img src="https://picsum.photos/300/500" alt="" className="w-100 rounded" />

            </div>

            <div className="flex flex-[3] flex-col gap-4 sm:gap-8 ml-4 my-4 sm:my-0 px-8 sm:px-0">
                <p className="text-xl text-gray-900">{product.name}</p>
                <p className="text-md font-bold text-gray-300">{product.code}</p>

                <p>{product.price} TL</p>

                <p className={`text-xs ${product.quantity > 0 ? "text-green-700" : "text-red-700"}`}>{product.quantity > 0 ? `Available (${product.quantity})` : "Not Available"}</p>

                <button
                    className="rounded w-24 py-2 px-4 bg-blue-500 text-sm text-gray-200 border-2 border-white transition-all hover:text-white hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500"
                    onClick={handleSubmit}
                    disabled={product.quantity > 0 ? false : true}>
                    Buy Now!
                </button>
            </div>

        </div>
    )
}

export default SingleProduct;