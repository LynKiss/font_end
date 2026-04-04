import { AddToCart, UpdateQuantity } from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";

function ProductItem({ item }) {
    const priceNew = ((item.price * (100 - item.discountPercentage)) / 100).toFixed(0);

    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(UpdateQuantity(item.id));
        }
        else {
            dispatch(AddToCart(item.id, item));
        }
    };

    return (
        <div className="product__item">
            <div className="product__image-wrap">
                <img className="product__image" src={item.thumbnail} alt={item.title} />
            </div>

            <div className="product__content">
                <h3 className="product__title">{item.title}</h3>

                <div className="product__price-wrap">
                    <div className="product__price-new">${priceNew}</div>
                    <div className="product__price-old">${item.price}</div>
                    <div className="product__percent">-{item.discountPercentage}%</div>
                </div>

                <div className="product__meta">
                    <span>Stock: {item.stock}</span>
                    <span>Rating: {item.rating}</span>
                    <span>{item.category}</span>
                </div>

                <button className="product__button" onClick={handleAddToCart}>
                    Them vao gio hang
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
