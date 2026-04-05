import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/AdminLayout";
import BookingPage from "./pages/BookingPage";
import ComponentsDemoPage from "./pages/ComponentsDemoPage";
import { RoomProvider } from "./context/RoomContext";
import CreateRoomPage from "./pages/CreateRoomPage";
import CustomersPage from "./pages/CustomersPage";
import DashboardPage from "./pages/DashboardPage";
import ListRoomPage from "./pages/ListRoomPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <RoomProvider>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/crm" element={<PlaceholderPage title="CRM" description="Trang quan ly co hoi, lien he va lich cham soc khach hang." />} />
          <Route
            path="/ecommerce"
            element={<PlaceholderPage title="E-commerce" description="Theo doi don hang online, san pham noi bat va hieu qua ban hang." />}
          />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/components-demo" element={<ComponentsDemoPage />} />
          <Route path="/create-room" element={<CreateRoomPage />} />
          <Route path="/list-room" element={<ListRoomPage />} />
          <Route
            path="/shipping-orders"
            element={<PlaceholderPage title="Dang giao" description="Danh sach cac don hang dang trong qua trinh van chuyen." />}
          />
          <Route
            path="/done-orders"
            element={<PlaceholderPage title="Hoan tat" description="Tong hop cac don hang da giao thanh cong." />}
          />
          <Route path="/customers" element={<CustomersPage />} />
          <Route
            path="/products"
            element={<PlaceholderPage title="San pham" description="Quan ly danh muc san pham, ton kho va tinh trang kinh doanh." />}
          />
          <Route path="/reports" element={<ReportsPage />} />
          <Route
            path="/settings"
            element={<PlaceholderPage title="Cai dat" description="Tuy chinh cau hinh he thong, tai khoan va phan quyen." />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RoomProvider>
  );
}

export default App;
