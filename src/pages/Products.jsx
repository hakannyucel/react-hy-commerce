import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import Product from "../components/Product";
import { TailSpin } from "react-loader-spinner";

const Products = () => {
    const [products, setProducts] = useState([]);
    const productsCollectionRef = collection(db, "products");

    useEffect(() => {

        const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getProducts();

    }, [])
    return (
      <main className="mb-auto">
        {products.length
          ? 
            <div className="sm:container mx-auto sm:mt-24 mt-12 flex flex-wrap sm:gap-12 gap-4 justify-center sm:justify-start items-center">
              {products.map((product, index) => (
                <Product key={index} id={product.id} name={product.name} code={product.code} price={product.price} />
              ))}
            </div>
          : 
            <div className="flex justify-center items-center mt-24">
              <TailSpin
                  height="40"
                  width="40"
                  color="#3150ff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
            </div>
        
        }
      </main>
    )
}

export default Products;