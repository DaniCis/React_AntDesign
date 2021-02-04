import './App.css';
import './MainLayout.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React,{useState,useEffect} from 'react';
import MenuContenido from './Menu';
import Navbar from './Navbar';
import { Layout,Menu,Dropdown} from "antd";
const { Header, Sider, Content } = Layout;

const App =() =>{

  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  }

  return (
  <div >
    <Layout> 
      <Sider>
      <MenuContenido
          className="site-layout-menu"
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        </Sider>
      <Layout>
        <Header className="site-layout-header">
        <Navbar
            toggled={toggled}
            collapsed={collapsed}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
        />
        </Header>
        <Content className="site-layout-content">
        </Content>
      </Layout>
    </Layout>
  </div>

  );
}

export default App;
