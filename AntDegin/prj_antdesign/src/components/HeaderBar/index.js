import { Avatar, Badge, Button, Dropdown, Input, Space, Tag, Typography } from "antd";
import Notify from "../Notify";

const { Text } = Typography;

function HeaderBar({
  collapsed,
  setCollapsed,
  notificationItems,
  profileMenu,
}) {
  return (
    <header className="admin-header ant-layout-header">
      <Space size="large">
        <Button
          type="text"
          className="header-trigger"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? ">>" : "||"}
        </Button>
        <Input className="header-search" placeholder="Tim kiem don hang, khach hang..." />
      </Space>

      <Space size="middle">
        <Tag color="blue" className="header-tag">
          Quan tri vien
        </Tag>
        <Dropdown
          trigger={["click"]}
          dropdownRender={() => <Notify notificationItems={notificationItems} />}
          placement="bottomRight"
        >
          <Button type="text" className="icon-button">
            <Badge count={notificationItems.length} size="small">
              <span className="icon-text">TB</span>
            </Badge>
          </Button>
        </Dropdown>
        <Dropdown menu={profileMenu} trigger={["click"]} placement="bottomRight">
          <Button type="text" className="profile-button">
            <Space size="small">
              <Avatar className="user-avatar">A</Avatar>
              {!collapsed && <Text strong>Admin</Text>}
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </header>
  );
}

export default HeaderBar;
