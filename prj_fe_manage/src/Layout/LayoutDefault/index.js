import { Outlet, Link } from "react-router-dom";
import "./style.css";
import CartMini from "../../components/CartMini";

function LayoutDefault() {

    return (
        <div className="layout-default">
            <header className="layout-default__header">
                <Link to="/" className="layout-default__brand">
                    Lyn
                </Link>
                <CartMini></CartMini>
              

            </header>

            <main className="layout-default__main">
                <Outlet />
            </main>

            <footer className="layout-default__footer">
                Copyright (c) 2023 by 28Tech
            </footer>
        </div>
    );
}

export default LayoutDefault;
