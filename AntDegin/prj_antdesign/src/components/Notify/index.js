import { Button, Divider, List, Typography } from "antd";

const { Text } = Typography;

function Notify({ notificationItems }) {
  return (
    <div className="dropdown-panel">
      <div className="dropdown-header">
        <Text strong>Notification</Text>
        <Button type="link" className="dropdown-link">
          View all
        </Button>
      </div>
      <Divider className="dropdown-divider" />
      <List
        dataSource={notificationItems}
        renderItem={(item) => (
          <List.Item className="notification-item">
            <div className={`notification-dot ${item.tone}`} />
            <div>
              <Text className="notification-title">{item.title}</Text>
              <div className="muted-text">{item.time}</div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Notify;
