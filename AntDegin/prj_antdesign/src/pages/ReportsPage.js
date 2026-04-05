import { Card, Col, Progress, Row, Statistic, Typography } from "antd";

const { Title, Text } = Typography;

function ReportsPage() {
  return (
    <div>
      <div className="page-heading small-gap">
        <div>
          <Title level={2} className="page-title">
            Bao cao
          </Title>
          <Text className="page-subtitle">Tong hop cac chi so van hanh va kinh doanh.</Text>
        </div>
      </div>

      <Row gutter={[20, 20]}>
        <Col xs={24} md={8}>
          <Card className="panel-card" bordered={false}>
            <Statistic title="Doanh thu thang nay" value={23523} prefix="$" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="panel-card" bordered={false}>
            <Statistic title="Tang truong" value={17.21} suffix="%" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="panel-card" bordered={false}>
            <Statistic title="Tong don" value={3685} />
          </Card>
        </Col>
        <Col xs={24}>
          <Card className="panel-card" title="Tien do muc tieu" bordered={false}>
            <div className="report-progress">
              <div>
                <div className="metric-row">
                  <Text>Doanh thu quy</Text>
                  <Text strong>76%</Text>
                </div>
                <Progress percent={76} showInfo={false} strokeColor="#2563eb" />
              </div>
              <div>
                <div className="metric-row">
                  <Text>Ty le lap day</Text>
                  <Text strong>63%</Text>
                </div>
                <Progress percent={63} showInfo={false} strokeColor="#16a34a" />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ReportsPage;
