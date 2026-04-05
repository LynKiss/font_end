import { useState } from "react";
import {
  App,
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { useRooms } from "../context/RoomContext";

const { Title, Text } = Typography;
const amenityOptions = [
  { label: "Wifi", value: "wifi" },
  { label: "May lanh", value: "air-conditioner" },
  { label: "TV", value: "tv" },
  { label: "Mini bar", value: "mini-bar" },
  { label: "Ho boi", value: "pool" },
];

function ListRoomPage() {
  const { notification } = App.useApp();
  const [viewMode, setViewMode] = useState("table");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [form] = Form.useForm();
  const { rooms, deleteRoom, updateRoom } = useRooms();

  const openEditModal = (room) => {
    setEditingRoom(room);
    form.setFieldsValue({
      name: room.name,
      quantityBed: room.quantityBed,
      quantityPeople: room.quantityPeople,
      description: room.description,
      amenities: room.amenities || [],
      status: room.status,
      typeRoom: room.typeRoom === "VIP" ? "vip" : "normal",
    });
    setIsEditOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditOpen(false);
    setEditingRoom(null);
    form.resetFields();
  };

  const handleUpdateRoom = (values) => {
    if (!editingRoom) {
      return;
    }

    updateRoom(editingRoom.key, values);
    const roomName = values.name;
    handleCloseModal();
    notification.success({
      message: "Cap nhat thanh cong!",
      description: `Ban da cap nhat thanh cong phong ${roomName}.`,
      placement: "topRight",
      duration: 4,
    });
  };

  const handleDeleteRoom = (room) => {
    deleteRoom(room.key);
    notification.success({
      message: "Xoa phong thanh cong!",
      description: `Ban da xoa thanh cong phong ${room.name}.`,
      placement: "topRight",
      duration: 4,
    });
  };

  const columns = [
    {
      title: "Ten phong",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "So giuong",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "So nguoi",
      dataIndex: "quantityPeople",
      key: "quantityPeople",
    },
    {
      title: "Loai phong",
      dataIndex: "typeRoom",
      key: "typeRoom",
      render: (_, record) => (
        <Tag color={record.typeRoom === "VIP" ? "purple" : "default"}>{record.typeRoom}</Tag>
      ),
    },
    {
      title: "Tinh trang",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <span className={value === "Con phong" ? "room-status available" : "room-status unavailable"}>
          {value}
        </span>
      ),
    },
    {
      title: "Hanh dong",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" ghost className="edit-room-button" onClick={() => openEditModal(record)}>
            Sua
          </Button>
          <Popconfirm
            title="Xoa phong"
            description="Ban co chac muon xoa phong nay?"
            okText="Xoa"
            cancelText="Huy"
            onConfirm={() => handleDeleteRoom(record)}
          >
            <Button danger ghost className="delete-room-button">
              Xoa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <Title level={2} className="page-title">
            List Room
          </Title>
          <Text className="page-subtitle">Danh sach phong voi 2 che do hien thi table va grid.</Text>
        </div>

        <Space className="view-switcher">
          <Button
            type={viewMode === "table" ? "primary" : "default"}
            onClick={() => setViewMode("table")}
          >
            Table
          </Button>
          <Button
            type={viewMode === "grid" ? "primary" : "default"}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </Button>
        </Space>
      </div>

      {viewMode === "table" ? (
        <Card className="panel-card" bordered={false}>
          <Table
            columns={columns}
            dataSource={rooms}
            pagination={{ pageSize: 4 }}
            rowKey="key"
          />
        </Card>
      ) : (
        <Row gutter={[20, 20]}>
          {rooms.map((room) => (
            <Col xs={24} md={12} xl={8} key={room.key}>
              <Card className="panel-card room-card" bordered={false}>
                <div className="room-card-header">
                  <Title level={4} className="room-card-title">
                    {room.name}
                  </Title>
                  <Tag color={room.typeRoom === "VIP" ? "purple" : "default"}>{room.typeRoom}</Tag>
                </div>

                <div className="room-card-info">
                  <Text>So giuong: {room.quantityBed}</Text>
                  <Text>So nguoi: {room.quantityPeople}</Text>
                  <span
                    className={
                      room.status === "Con phong"
                        ? "room-status available"
                        : "room-status unavailable"
                    }
                  >
                    {room.status}
                  </span>
                  <Space wrap>
                    <Button type="primary" ghost className="room-card-action" onClick={() => openEditModal(room)}>
                      Sua phong
                    </Button>
                    <Popconfirm
                      title="Xoa phong"
                      description="Ban co chac muon xoa phong nay?"
                      okText="Xoa"
                      cancelText="Huy"
                      onConfirm={() => handleDeleteRoom(room)}
                    >
                      <Button danger ghost className="room-card-action">
                        Xoa phong
                      </Button>
                    </Popconfirm>
                  </Space>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        open={isEditOpen}
        onCancel={handleCloseModal}
        footer={null}
        title="Chinh sua phong"
        destroyOnHidden
      >
        <Form form={form} layout="vertical" className="booking-form create-room-form" onFinish={handleUpdateRoom}>
          <Form.Item
            label="Ten phong"
            name="name"
            rules={[{ required: true, message: "Vui long nhap ten phong" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="So luong giuong"
            name="quantityBed"
            rules={[{ required: true, message: "Vui long nhap so giuong" }]}
          >
            <InputNumber className="full-input" min={1} />
          </Form.Item>

          <Form.Item
            label="So nguoi toi da"
            name="quantityPeople"
            rules={[{ required: true, message: "Vui long nhap so nguoi" }]}
          >
            <InputNumber className="full-input" min={1} />
          </Form.Item>

          <Form.Item label="Mo ta" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Tien ich" name="amenities">
            <Select mode="multiple" options={amenityOptions} />
          </Form.Item>

          <Form.Item label="Trang thai" name="status">
            <Radio.Group className="status-group">
              <Radio value="Con phong">Con phong</Radio>
              <Radio value="Het phong">Het phong</Radio>
            </Radio.Group>
          </Form.Item>

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

          <Space>
            <Button type="primary" htmlType="submit">
              Cap nhat
            </Button>
            <Button onClick={handleCloseModal}>Huy</Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}

export default ListRoomPage;
