import DashboardContent from "../components/DashboardContent";
import { recentOrders, statCards } from "../data/adminData";

function DashboardPage() {
  return <DashboardContent statCards={statCards} recentOrders={recentOrders} />;
}

export default DashboardPage;
