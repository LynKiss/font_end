import { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "./Product/Product.scss";

function CreateProduct(props) {
    const { onReload } = props
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({ category: "smartphones" });
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch("http://localhost:3002/categories");
                const categories = await res.json();

                setDataCategory(categories || []);

                if (categories.length > 0) {
                    setData((prev) => ({
                        ...prev,
                        category: categories[0].name,
                    }));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    function closeModal() {
        setShowModal(false);
    }

    function openModal() {
        setShowModal(true);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3002/products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire({
                    title: "Thanh cong",
                    text: "Da tao san pham moi",
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
                    text: "Khong the tao san pham",
                    icon: "error",
                    confirmButtonText: "Thu lai",
                });
            });
    }

    return (
        <>
            <button className="create-product__trigger" onClick={openModal}>
                + Tao san pham moi
            </button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                className="product-modal"
                overlayClassName="product-modal-overlay"
                contentLabel="Tao san pham moi"
            >
                <form className="create-product-form" onSubmit={handleSubmit}>
                    <h2 className="create-product-form__title">Tao san pham moi</h2>

                    <table className="create-product-form__table">
                        <tbody>
                            <tr>
                                <td>Tieu de</td>
                                <td>
                                    <input type="text" name="title" onChange={handleOnChange} required />
                                </td>
                            </tr>
                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh muc</td>
                                    <td>
                                        <select name="category" value={data.category} onChange={handleOnChange} required>
                                            {dataCategory.map((item, index) => (
                                                <option key={index} value={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>Gia</td>
                                <td>
                                    <input type="number" name="price" onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Giam gia</td>
                                <td>
                                    <input type="number" name="discountPercentage" onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>So luong</td>
                                <td>
                                    <input type="number" name="stock" onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Duong dan anh</td>
                                <td>
                                    <input type="text" name="thumbnail" onChange={handleOnChange} required />
                                </td>
                            </tr>

                            <tr>
                                <td>Mo ta</td>
                                <td>
                                    <textarea rows={4} name="description" onChange={handleOnChange} required></textarea>
                                </td>
                            </tr>

                            <tr className="create-product-form__actions">
                                <td>
                                    <button type="button" onClick={closeModal}>
                                        Huy
                                    </button>
                                </td>
                                <td>
                                    <input type="submit" value="Tao moi" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default CreateProduct;
