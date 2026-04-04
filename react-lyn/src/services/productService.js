import { del, get, patch, post } from "../utils/request";

// Lay danh sach san pham
export async function getProductList() {
    return get("/products");
}

// Lay danh sach danh muc
export async function getCategoryList() {
    return get("/categories");
}

// Tao san pham moi
export async function createProduct(data) {
    return post("/products", data);
}

// Sua san pham theo id
export async function updateProduct(id, data) {
    return patch(`/products/${id}`, data);
}

// Xoa san pham theo id
export async function deleteProduct(id) {
    return del(`/products/${id}`);
}
