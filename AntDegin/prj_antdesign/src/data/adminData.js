export const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    children: [
      { key: "default", label: "Tong quan", path: "/" },
      { key: "crm", label: "CRM", path: "/crm" },
      { key: "ecommerce", label: "E-commerce", path: "/ecommerce" },
    ],
  },
  {
    key: "orders",
    label: "Don hang",
    children: [
      { key: "booking", label: "Dat phong", path: "/booking" },
      { key: "shipping-orders", label: "Dang giao", path: "/shipping-orders" },
      { key: "done-orders", label: "Hoan tat", path: "/done-orders" },
    ],
  },
  {
    key: "rooms",
    label: "Quan ly phong",
    children: [
      { key: "create-room", label: "Create Room", path: "/create-room" },
      { key: "list-room", label: "List Room", path: "/list-room" },
    ],
  },
  {
    key: "components",
    label: "Components",
    children: [
      { key: "components-demo", label: "Components Demo", path: "/components-demo" },
    ],
  },
  { key: "customers", label: "Khach hang", path: "/customers" },
  { key: "products", label: "San pham", path: "/products" },
  { key: "reports", label: "Bao cao", path: "/reports" },
  { key: "settings", label: "Cai dat", path: "/settings" },
];

export const statCards = [
  { title: "Doanh thu", value: "125.000.000d", note: "+12% so voi thang truoc" },
  { title: "Don hang", value: "1.248", note: "48 don dang xu ly" },
  { title: "Khach hang moi", value: "320", note: "18 khach hang trong hom nay" },
  { title: "Ti le hoan thanh", value: "89%", note: "Muc tieu quy II" },
];

export const recentOrders = [
  { code: "#DH001", customer: "Nguyen Minh Anh", status: "Da thanh toan" },
  { code: "#DH002", customer: "Tran Quoc Bao", status: "Dang giao" },
  { code: "#DH003", customer: "Le Thu Ha", status: "Cho xac nhan" },
  { code: "#DH004", customer: "Pham Gia Huy", status: "Da thanh toan" },
];

export const notificationItems = [
  { title: "Ban co don hang moi", time: "8 phut truoc", tone: "blue" },
  { title: "Khach hang vua dang ky", time: "15 phut truoc", tone: "green" },
  { title: "Can kiem tra ton kho", time: "32 phut truoc", tone: "orange" },
  { title: "Bao cao da san sang", time: "1 gio truoc", tone: "purple" },
];

export const profileMenu = {
  items: [
    { key: "profile", label: "Thong tin tai khoan" },
    { key: "account", label: "Cai dat tai khoan" },
    { key: "logout", label: "Dang xuat" },
  ],
};

export const roomList = [
  {
    key: "room-1",
    name: "Phong ABC",
    quantityBed: 3,
    quantityPeople: 6,
    typeRoom: "Thuong",
    status: "Con phong",
  },
  {
    key: "room-2",
    name: "Phong test",
    quantityBed: 2,
    quantityPeople: 6,
    typeRoom: "Thuong",
    status: "Het phong",
  },
  {
    key: "room-3",
    name: "Phong ABC 2",
    quantityBed: 2,
    quantityPeople: 4,
    typeRoom: "VIP",
    status: "Con phong",
  },
  {
    key: "room-4",
    name: "Phong ABC 3",
    quantityBed: 3,
    quantityPeople: 6,
    typeRoom: "Thuong",
    status: "Con phong",
  },
];
