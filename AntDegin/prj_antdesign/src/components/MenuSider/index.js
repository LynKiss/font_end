import { Avatar, Card, Layout, Menu, Progress, Typography } from "antd";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Title, Text } = Typography;

function MenuSider({ collapsed, setCollapsed, menuItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  const itemPathMap = useMemo(() => {
    const map = {};
    const walk = (items, parentKey = null) => {
      items.forEach((item) => {
        map[item.key] = { path: item.path, parentKey };
        if (item.children) {
          walk(item.children, item.key);
        }
      });
    };

    walk(menuItems);
    return map;
  }, [menuItems]);

  const activeEntry =
    Object.entries(itemPathMap).find(([, value]) => value.path === location.pathname) || [];
  const selectedKey = activeEntry[0] || "default";
  const openedParentKey = activeEntry[1]?.parentKey;

  return (
    <Sider
      width={240}
      collapsed={collapsed}
      collapsedWidth={84}
      trigger={null}
      breakpoint="lg"
      onBreakpoint={(broken) => setCollapsed(broken)}
      className={`admin-sider ${collapsed ? "is-collapsed" : ""}`}
    >
      <div className="brand">
        <Avatar className="brand-avatar">E</Avatar>
        {!collapsed && (
          <div>
            <Title level={4} className="brand-title">
              Admin Panel
            </Title>
            <Text className="brand-subtitle">Quan tri he thong</Text>
          </div>
        )}
      </div>

      <Menu
        className="admin-menu"
        mode="inline"
        selectedKeys={[selectedKey]}
        defaultOpenKeys={openedParentKey ? [openedParentKey] : ["dashboard", "orders"]}
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={({ key }) => {
          const target = itemPathMap[key]?.path;
          if (target) {
            navigate(target);
          }
        }}
      />

      {!collapsed && (
        <Card className="sider-card" bordered={false}>
          <Text className="sider-card-label">Hieu suat hom nay</Text>
          <Progress percent={78} strokeColor="#1d4ed8" trailColor="#dbeafe" />
          <Text className="sider-card-note">Nhan vien dang dat muc tieu rat tot.</Text>
        </Card>
      )}
    </Sider>
  );
}

export default MenuSider;
