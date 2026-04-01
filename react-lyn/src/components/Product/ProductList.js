import { useEffect, useState } from "react";

function ProductList(props) {
    const { reload } = props;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true);
                setError("");
                const response = await fetch("http://localhost:3002/products");

                if (!response.ok) {
                    throw new Error("Khong the tai du lieu san pham.");
                }

                const data = await response.json();
                setProducts((data || []).slice().reverse());
            } catch (err) {
                setError(err.message || "Da co loi xay ra.");
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [reload]);

    if (loading) {
        return <p className="product-list__status">Dang tai du lieu...</p>;
    }

    if (error) {
        return <p className="product-list__status product-list__status--error">{error}</p>;
    }

    return (
        <div className="product-list">
            <h1 className="product-list__heading">Product List</h1>
            {products.length === 0 ? (
                <p className="product-list__status">Khong co san pham nao.</p>
            ) : (
                <div className="product-list__grid">
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <img
                                className="product-card__image"
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div className="product-card__body">
                                <p className="product-card__category">{product.category}</p>
                                <h3 className="product-card__title">{product.title}</h3>
                                <p className="product-card__description">{product.description}</p>
                                <div className="product-card__meta">
                                    <span className="product-card__price">${product.price}</span>
                                    <span className="product-card__rating">Rating {product.rating}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
