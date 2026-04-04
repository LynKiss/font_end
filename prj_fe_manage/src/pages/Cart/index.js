import { useDispatch, useSelector } from "react-redux";
import CartList from "./cartList";
import { ClearCart } from "../../actions/cart";
import "./style.scss";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer || []);
    const total = cart.reduce((sum, item) => {
        const info = item.info || {};
        const priceNew = ((info.price * (100 - info.discountPercentage)) / 100).toFixed(0);
        return sum + Number(priceNew) * item.quantity;
    }, 0);

    return (
        <section className="cart-page">
            <div className="cart-page__header">
                <h2>Gio hang</h2>
                <button className="cart-page__clear" onClick={() => dispatch(ClearCart())}>
                    Xoa tat ca
                </button>
            </div>

            {cart.length > 0 ? (
                <>
                    <CartList />
                    <div className="cart__total">
                        Tong tien: <span>${total}</span>
                    </div>
                </>
            ) : (
                <div className="cart-page__empty">Gio hang trong</div>
            )}
        </section>
    );
}

export default Cart;
