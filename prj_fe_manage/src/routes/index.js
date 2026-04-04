import LayoutDefault from "../Layout/LayoutDefault";
import Cart from "../pages/Cart";
import Home from "../pages/Home";



export const router = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    }
]
