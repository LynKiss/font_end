import { Button, Card, Col, List, Progress, Row, Space, Tag, Typography } from "antd";

const { Title, Text } = Typography;

function DashboardContent({ statCards, recentOrders }) {
  return (
    <div>
      <div className="page-heading">
        <div>
          <Title level={2} className="page-title">
            Tong quan he thong
          </Title>
          <Text className="page-subtitle">
            Theo doi tinh hinh kinh doanh va hoat dong trong ngay.
          </Text>
        </div>
        <Button type="primary" size="large">
          Tao bao cao
        </Button>
      </div>

      <Row gutter={[20, 20]}>
        {statCards.map((item) => (
          <Col xs={24} sm={12} xl={6} key={item.title}>
            <Card className="stat-card" bordered={false}>
              <Text className="stat-title">{item.title}</Text>
              <Title level={3} className="stat-value">
                {item.value}
              </Title>
              <Text className="stat-note">{item.note}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[20, 20]} className="dashboard-grid">
        <Col xs={24} xl={16}>
          <Card
            className="panel-card panel-large"
            title="Doanh thu theo kenh"
            bordered={false}
          >
            <div className="chart-placeholder">
              <div className="chart-bar chart-bar-1" />
              <div className="chart-bar chart-bar-2" />
              <div className="chart-bar chart-bar-3" />
              <div className="chart-bar chart-bar-4" />
              <div className="chart-bar chart-bar-5" />
              <div className="chart-bar chart-bar-6" />
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={8}>
          <Card className="panel-card panel-large" title="Chi so nhanh" bordered={false}>
            <Space direction="vertical" size="large" className="full-width">
              <div>
                <div className="metric-row">
                  <Text>Chuyen doi</Text>
                  <Text strong>68%</Text>
                </div>
                <Progress percent={68} showInfo={false} strokeColor="#2563eb" />
              </div>
              <div>
                <div className="metric-row">
                  <Text>Khach quay lai</Text>
                  <Text strong>54%</Text>
                </div>
                <Progress percent={54} showInfo={false} strokeColor="#0f766e" />
              </div>
              <div>
                <div className="metric-row">
                  <Text>Hoan thanh don</Text>
                  <Text strong>92%</Text>
                </div>
                <Progress percent={92} showInfo={false} strokeColor="#7c3aed" />
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} xl={14}>
          <Card className="panel-card" title="Don hang gan day" bordered={false}>
            <List
              dataSource={recentOrders}
              renderItem={(item) => (
                <List.Item className="order-item">
                  <div>
                    <Text strong>{item.code}</Text>
                    <div className="muted-text">{item.customer}</div>
                  </div>
                  <Tag color={item.status === "Da thanh toan" ? "green" : "gold"}>
                    {item.status}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card className="panel-card" title="Ghi chu noi bo" bordered={false}>
            <div className="note-box">
              <Title level={5}>Ke hoach hom nay</Title>
              <Text className="muted-text">
                Uu tien don hang VIP, kiem tra ton kho va cap nhat chuong trinh khuyen mai.
              </Text>
            </div>
            <div className="note-box secondary">
              <Title level={5}>Lich hop</Title>
              <Text className="muted-text">
                14:00 hop team kinh doanh, 16:30 chot so lieu bao cao cuoi ngay.
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardContent;
