import React from "react";
import { Layout, Typography, Button } from "antd";
import "./Content.css";

const { Title } = Typography;
const { Content } = Layout;

const MainContent = () => {
  return (
    <Content className="main-content">
      <div className="welcome-section">
        <div className="welcome-text">
          <Title level={4}>Welcome!</Title>
          <Title level={2}>
            Manage your <span className="highlight">Deals</span>
          </Title>
          <Button type="primary" className="get-started">
            Get Started
          </Button>
        </div>
        <div className="illustration-box">
          <img
            src="/illustration.png"
            alt="CRM Illustration"
            className="illustration"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400"; // Fallback image
            }}
          />
        </div>
      </div>
    </Content>
  );
};

export default MainContent;