import { App, Button, Card, Col, Form, Input, InputNumber, Radio, Row, Select, Typography } from "antd";
import { useRooms } from "../context/RoomContext";

const { Title, Text } = Typography;
const amenityOptions = [
  { label: "Wifi", value: "wifi" },
  { label: "May lanh", value: "air-conditioner" },
  { label: "TV", value: "tv" },
  { label: "Mini bar", value: "mini-bar" },
  { label: "Ho boi", value: "pool" },
];

function CreateRoomPage() {
  const [form] = Form.useForm();
  const { notification } = App.useApp();
  const { addRoom } = useRooms();

  const handleFinish = (values) => {
    try {
      addRoom(values);
      form.resetFields();
      notification.success({
        message: "Tao phong moi thanh cong!",
        description: `Ban da tao thanh cong phong ${values.name}.`,
        placement: "topRight",
        duration: 4,
      });
    } catch (error) {
      notification.error({
        message: "Tao phong moi that bai!",
        description: `Khong the tao phong ${values.name}. Vui long thu lai.`,
        placement: "topRight",
        duration: 4,
      });
    }
  };

  return (
    <Card className="panel-card" bordered={false}>
      <Title level={2} className="page-title">
        Them phong moi
      </Title>
      <Text className="page-subtitle">
        Dien thong tin phong, so luong giuong, suc chua va cac tuy chon bo sung.
      </Text>

      <Form
        form={form}
        layout="vertical"
        className="booking-form create-room-form"
        onFinish={handleFinish}
        initialValues={{
          quantityBed: 1,
          quantityPeople: 2,
          status: "Con phong",
          typeRoom: "normal",
          amenities: ["wifi"],
        }}
      >
        <Row gutter={[20, 4]}>
          <Col span={24}>
            <Form.Item
              label="Ten phong"
              name="name"
              rules={[{ required: true, message: "Vui long nhap ten phong" }]}
            >
              <Input placeholder="Phong ABC" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="So luong giuong"
              name="quantityBed"
              rules={[{ required: true, message: "Vui long nhap so giuong" }]}
            >
              <InputNumber className="full-input" min={1} placeholder="2" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="So nguoi toi da"
              name="quantityPeople"
              rules={[{ required: true, message: "Vui long nhap so nguoi" }]}
            >
              <InputNumber className="full-input" min={1} placeholder="4" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Mo ta" name="description">
              <Input.TextArea rows={4} placeholder="Nhap mo ta ngan cho phong..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Tien ich" name="amenities">
              <Select
                mode="multiple"
                placeholder="Chon tien ich"
                options={amenityOptions}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Trang thai" name="status">
              <Radio.Group className="status-group">
                <Radio value="Con phong">Con phong</Radio>
                <Radio value="Het phong">Het phong</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Loai phong"
              name="typeRoom"
              rules={[{ required: true, message: "Vui long chon loai phong" }]}
            >
              <Radio.Group className="status-group">
                <Radio value="normal">Thuong</Radio>
                <Radio value="vip">VIP</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Tao phong
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default CreateRoomPage;
