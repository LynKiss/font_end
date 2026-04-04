
import "./style.scss";
import Product from "../../components/Product";

function Home() {
   

    return (
        <section className="product-page">
            <div className="product-page__header">
                <p className="product-page__eyebrow">Store</p>
                <h1 className="product-page__title">Danh sach san pham</h1>
   
            </div>
            <Product ></Product>
        </section>
    );
}

export default Home;
