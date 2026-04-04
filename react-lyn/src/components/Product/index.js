import "./Product.scss";
import ProductList from "./ProductList";
import CreateProduct from "../createProduct";
import { useState } from "react";

function Product() {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload((prev) => !prev);
    };

    return (
        <section className="product-page">
            <div className="product-page__header">
                <p className="product-page__eyebrow">React + SCSS</p>
                <h2 className="product-page__title">Danh sach san pham</h2>
            </div>
            <CreateProduct onReload={handleReload}></CreateProduct>
            <ProductList reload={reload} onReload={handleReload} />
        </section>
    );
}

export default Product;
