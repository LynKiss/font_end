import { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "./Product/Product.scss";
import { getCategoryList, updateProduct } from "../services/productService";

function EditProduct(props) {
    const { product, onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        title: "",
        category: "",
        price: "",
        discountPercentage: "",
        stock: "",
        thumbnail: "",
        description: "",
    });
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        if (!product) {
            return;
        }

        setData({
            title: product.title || "",
            category: product.category || "",
            price: product.price || "",
            discountPercentage: product.discountPercentage || "",
            stock: product.stock || "",
            thumbnail: product.thumbnail || "",
            description: product.description || "",
        });
    }, [product]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const categories = await getCategoryList();
                setDataCategory(categories || []);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    function closeModal() {
        setShowModal(false);
    }

    function openModal() {
        setShowModal(true);
    }

    function handleSubmit(event) {
        event.preventDefault();

        updateProduct(product.id, data)
            .then(() => {
                Swal.fire({
                    title: "Thanh cong",
                    text: "Da cap nhat san pham",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                closeModal();
                onReload();
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "That bai",
                    text: "Khong the cap nhat san pham",
                    icon: "error",
                    confirmButtonText: "Thu lai",
                });
            });
    }

    return (
        <>
            <button className="product-card__action" type="button" onClick={openModal}>
                Sua
            </button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                className="product-modal"
                overlayClassName="product-modal-overlay"
                contentLabel="Cap nhat san pham"
            >
                <form className="create-product-form" onSubmit={handleSubmit}>
                    <h2 className="create-product-form__title">Cap nhat san pham</h2>

                    <table className="create-product-form__table">
                        <tbody>
                            <tr>
                                <td>Tieu de</td>
                                <td>
                                    <input type="text" name="title" value={data.title} onChange={handleOnChange} required />
                                </td>
                            </tr>

                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh muc</td>
                                    <td>
                                        <select name="category" value={data.category} onChange={handleOnChange} required>
                                            {dataCategory.map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>Gia</td>
                                <td>
                                    <input type="number" name="price" value={data.price} onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Giam gia</td>
                                <td>
                                    <input
                                        type="number"
                                        name="discountPercentage"
                                        value={data.discountPercentage}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>So luong</td>
                                <td>
                                    <input type="number" name="stock" value={data.stock} onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Duong dan anh</td>
                                <td>
                                    <input type="text" name="thumbnail" value={data.thumbnail} onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Mo ta</td>
                                <td>
                                    <textarea rows={4} name="description" value={data.description} onChange={handleOnChange} required></textarea>
                                </td>
                            </tr>

                            <tr className="create-product-form__actions">
                                <td>
                                    <button type="button" onClick={closeModal}>
                                        Huy
                                    </button>
                                </td>
                                <td>
                                    <input type="submit" value="Cap nhat" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default EditProduct;
