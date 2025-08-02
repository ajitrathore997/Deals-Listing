import { Layout, Avatar, Drawer, Button } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './Header.css';

const { Header } = Layout;

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header className="header">
        <div className="logo">
          # <span className="logo-sub">ROSTER GRID</span>
        </div>

        <Button
          className="menu-icon"
          type="text"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
        />

        <div className="nav-menu">
          <span>Dashboard</span>
          <span>Roster</span>
          <span>Communications</span>
          <span className="active">CRM</span>
          <span>Contracts</span>
          <span>Settings</span>
          <span>More</span>
        </div>

        <div className="user-profile">
          <span>Michael</span>
          <Avatar icon={<UserOutlined />} />
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={open}
        className="mobile-drawer"
      >
        <div className="drawer-menu">
          <span onClick={toggleDrawer}>Dashboard</span>
          <span onClick={toggleDrawer}>Roster</span>
          <span onClick={toggleDrawer}>Communications</span>
          <span className="active" onClick={toggleDrawer}>CRM</span>
          <span onClick={toggleDrawer}>Contracts</span>
          <span onClick={toggleDrawer}>Settings</span>
          <span onClick={toggleDrawer}>More</span>
        </div>
      </Drawer>
    </>
  );
}
