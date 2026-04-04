import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, UpdateQuantity } from "../../actions/cart";
import "./style.scss";

function CartList() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer || []);

    const handleMinus = (id) => {
        dispatch(UpdateQuantity(id, -1));
    };

    const handlePlus = (id) => {
        dispatch(UpdateQuantity(id, 1));
    };

    const handleDelete = (id) => {
        dispatch(DeleteCart(id));
    };

    return (
        <div className="cart">
            {cart.map((item) => {
                const info = item.info || {};
                const priceNew = ((info.price * (100 - info.discountPercentage)) / 100).toFixed(0);
                const totalItem = Number(priceNew) * item.quantity;

                return (
                    <div className="cart__item" key={item.id}>
                        <div className="cart__image">
                            <img src={info.thumbnail} alt={info.title} />
                        </div>
                        <div className="cart__content">
                            <h4 className="cart__title">{info.title}</h4>
                            <div className="cart__price-new">${priceNew}</div>
                            <div className="cart__price-old">${info.price}</div>
                        </div>
                        <div className="cart__quantity">
                            <button onClick={() => handleMinus(item.id)}>-</button>
                            <input value={item.quantity} readOnly />
                            <button onClick={() => handlePlus(item.id)}>+</button>
                        </div>
                        <div className="cart__subtotal">${totalItem}</div>
                        <button className="cart__delete" onClick={() => handleDelete(item.id)}>
                            Xoa
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default CartList;
