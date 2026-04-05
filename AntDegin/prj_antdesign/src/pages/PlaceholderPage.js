import { Card, Typography } from "antd";

const { Title, Text } = Typography;

function PlaceholderPage({ title, description }) {
  return (
    <Card className="panel-card" bordered={false}>
      <Title level={2} className="page-title">
        {title}
      </Title>
      <Text className="page-subtitle">{description}</Text>
    </Card>
  );
}

export default PlaceholderPage;
