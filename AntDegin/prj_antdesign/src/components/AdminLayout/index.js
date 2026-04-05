import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderBar from "../HeaderBar";
import MenuSider from "../MenuSider";
import { menuItems, notificationItems, profileMenu } from "../../data/adminData";

const { Content } = Layout;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="admin-layout">
      <MenuSider collapsed={collapsed} setCollapsed={setCollapsed} menuItems={menuItems} />

      <Layout>
        <HeaderBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          notificationItems={notificationItems}
          profileMenu={profileMenu}
        />

        <Content className="admin-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
