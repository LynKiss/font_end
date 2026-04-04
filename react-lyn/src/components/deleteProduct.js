import Swal from "sweetalert2";
import "./Product/Product.scss";
import { deleteProduct } from "../services/productService";

function DeleteProduct(props) {
    const { product, onReload } = props;

    function handleDelete() {
        Swal.fire({
            title: "Ban chac chan muon xoa?",
            text: `San pham ${product.title} se bi xoa`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Xoa",
            cancelButtonText: "Huy",
        }).then((result) => {
            if (!result.isConfirmed) {
                return;
            }

            deleteProduct(product.id)
                .then(() => {
                    Swal.fire({
                        title: "Thanh cong",
                        text: "Da xoa san pham",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    onReload();
                })
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                        title: "That bai",
                        text: "Khong the xoa san pham",
                        icon: "error",
                        confirmButtonText: "Thu lai",
                    });
                });
        });
    }

    return (
        <button className="product-card__action product-card__action--danger" type="button" onClick={handleDelete}>
            Xoa
        </button>
    );
}

export default DeleteProduct;
