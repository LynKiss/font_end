// Dia chi API chung cua json-server
const API_URL = "http://localhost:3002";

// Ham chung de goi API
async function send(url, options = {}) {
    const response = await fetch(`${API_URL}${url}`, options);

    // Neu API bi loi thi bao ra ngoai
    if (!response.ok) {
        throw new Error("Co loi xay ra khi goi API.");
    }

    // DELETE thuong khong co du lieu tra ve
    if (response.status === 204) {
        return null;
    }

    return response.json();
}

// Lay du lieu
export async function get(url) {
    return send(url);
}

// Them moi du lieu
export async function post(url, data) {
    return send(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

// Cap nhat du lieu
export async function patch(url, data) {
    return send(url, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

// Xoa du lieu
export async function del(url) {
    return send(url, {
        method: "DELETE",
    });
}
