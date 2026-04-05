import { useState } from "react";
import {
  App,
  Button,
  Card,
  Col,
  Modal,
  QRCode,
  Rate,
  Row,
  Skeleton,
  Space,
  Spin,
  Tag,
  Tooltip,
  Typography,
} from "antd";

const { Title, Text } = Typography;

const componentItems = [
  { id: "01", title: "Component: Tag" },
  { id: "02", title: "Component: Tooltip" },
  { id: "03", title: "Component: Message" },
  { id: "04", title: "Component: Modal" },
  { id: "05", title: "Component: Notification" },
  { id: "06", title: "Component: Skeleton" },
  { id: "07", title: "Component: Spin" },
  { id: "08", title: "Component: QRCode" },
  { id: "09", title: "Component: Rate" },
];

function ComponentsDemoPage() {
  const { message, notification } = App.useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [rating, setRating] = useState(4);

  const handleShowMessage = () => {
    message.success("Message component dang hoat dong!");
  };

  const handleShowNotification = () => {
    notification.info({
      message: "Notification",
      description: "Day la vi du notification bang Ant Design.",
      placement: "topRight",
    });
  };

  const handleShowSpin = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1200);
  };

  const renderAction = (id) => {
    switch (id) {
      case "01":
        return (
          <Space wrap>
            <Tag color="magenta">New</Tag>
            <Tag color="cyan">React</Tag>
            <Tag color="gold">Admin</Tag>
          </Space>
        );
      case "02":
        return (
          <Tooltip title="Day la noi dung tooltip">
            <Button>Hover vao day</Button>
          </Tooltip>
        );
      case "03":
        return <Button onClick={handleShowMessage}>Show Message</Button>;
      case "04":
        return <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>;
      case "05":
        return <Button onClick={handleShowNotification}>Show Notification</Button>;
      case "06":
        return (
          <Space direction="vertical" className="full-width">
            <Button onClick={() => setShowSkeleton((prev) => !prev)}>
              {showSkeleton ? "Hide Skeleton" : "Show Skeleton"}
            </Button>
            {showSkeleton ? (
              <Skeleton active paragraph={{ rows: 3 }} />
            ) : (
              <Card size="small" className="mini-card">
                Noi dung da duoc tai xong.
              </Card>
            )}
          </Space>
        );
      case "07":
        return (
          <Space direction="vertical" className="full-width">
            <Button onClick={handleShowSpin}>Run Spin</Button>
            <Spin spinning={spinning}>
              <Card size="small" className="mini-card">
                Khu vuc dang tai du lieu
              </Card>
            </Spin>
          </Space>
        );
      case "08":
        return <QRCode value="https://ant.design/components/qr-code" />;
      case "09":
        return <Rate value={rating} onChange={setRating} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="page-heading">
        <div>
          <Title level={2} className="page-title">
            Noi dung
          </Title>
          <Text className="page-subtitle">
            Tong hop cac component Ant Design co ban de ban thu nghiem nhanh.
          </Text>
        </div>
      </div>

      <Row gutter={[20, 20]}>
        {componentItems.map((item) => (
          <Col xs={24} md={12} key={item.id}>
            <Card className="panel-card demo-card" bordered={false}>
              <div className="demo-card-inner">
                <div className="demo-index">{item.id}</div>
                <div className="demo-content">
                  <Title level={4} className="demo-title">
                    {item.title}
                  </Title>
                  <div className="demo-action">{renderAction(item.id)}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={isModalOpen}
        title="Demo Modal"
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Text>Day la modal mau de ban thay cach su dung component Modal.</Text>
      </Modal>
    </>
  );
}

export default ComponentsDemoPage;
