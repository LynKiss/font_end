import { Avatar, Card, List, Space, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const customers = [
  { name: "Nguyen Minh Anh", email: "minhanh@gmail.com", level: "VIP" },
  { name: "Tran Quoc Bao", email: "quocbao@gmail.com", level: "Than thiet" },
  { name: "Le Thu Ha", email: "thuha@gmail.com", level: "Moi" },
];

function CustomersPage() {
  return (
    <Card className="panel-card" bordered={false}>
      <Title level={2} className="page-title">
        Khach hang
      </Title>
      <Text className="page-subtitle">Danh sach khach hang dang duoc quan ly trong he thong.</Text>

      <List
        className="customers-list"
        dataSource={customers}
        renderItem={(item) => (
          <List.Item>
            <Space>
              <Avatar className="user-avatar">{item.name.charAt(0)}</Avatar>
              <div>
                <Text strong>{item.name}</Text>
                <div className="muted-text">{item.email}</div>
              </div>
            </Space>
            <Tag color={item.level === "VIP" ? "gold" : item.level === "Than thiet" ? "blue" : "green"}>
              {item.level}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default CustomersPage;
