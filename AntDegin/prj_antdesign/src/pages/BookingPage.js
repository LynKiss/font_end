import { Button, Card, Checkbox, Col, Form, Input, Row, Space, Typography } from "antd";

const { Title, Text } = Typography;

function BookingPage() {
  return (
    <Card className="panel-card booking-page" bordered={false}>
      <Title level={2} className="page-title">
        Dat phong
      </Title>
      <Text className="page-subtitle">
        Nhap thong tin khach hang va cac dich vu di kem cho don dat phong.
      </Text>

      <Form layout="vertical" className="booking-form">
        <Row gutter={[20, 4]}>
          <Col span={24}>
            <Form.Item label="Ho ten" name="fullName">
              <Input placeholder="Dang Phuong Nam" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="So dien thoai" name="phone">
              <Input placeholder="0123456789" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Email" name="email">
              <Input placeholder="namtessss@gmail.com" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Dich vu them" name="services">
              <Checkbox.Group>
                <Space direction="vertical">
                  <Checkbox value="motorbike">Thue xe may</Checkbox>
                  <Checkbox value="car-4">Thue o to 4 cho</Checkbox>
                  <Checkbox value="car-7">Thue o to 7 cho</Checkbox>
                  <Checkbox value="laundry">Giat ui</Checkbox>
                  <Checkbox value="breakfast">An sang</Checkbox>
                </Space>
              </Checkbox.Group>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Button type="primary">Dat phong</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default BookingPage;
