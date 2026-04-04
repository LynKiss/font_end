import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import ProductItem from "./ProductItem";
import "./style.scss";

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProducts(result);
        };

        fetchApi();
    }, []);
    return (
        <div className="product">
            {products.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Product;
