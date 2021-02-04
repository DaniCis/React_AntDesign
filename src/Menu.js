import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { UploadOutlined} from '@ant-design/icons';
import 'react-pro-sidebar/dist/css/styles.css';


const MenuContenido = ({collapsed,toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="site-layout-logo">
            <img src="https://confidentefinanciero.com/wp-content/uploads/2019/04/logo-wiam-2018.svg" alt="Logo" />
        </div> 
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle"  className="site-layout-categorias">
          <MenuItem
            icon={<UploadOutlined />}
            suffix={<span className="badge red">2</span>}
          >PARAMETROS
          </MenuItem>
          <MenuItem icon={<UploadOutlined />}> MENU2</MenuItem>
        </Menu>
        <Menu iconShape="square">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title='hola'
            icon={<UploadOutlined />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title='hola'
            icon={<UploadOutlined />}
          >
            <MenuItem>SUBMENU 1</MenuItem>
            <MenuItem>SUBMENU 2</MenuItem>
            <MenuItem>SUBMENU 3</MenuItem>
          </SubMenu>
          <SubMenu title='hola' icon={<UploadOutlined />}>
            <MenuItem>SUBMENU 1 </MenuItem>
            <MenuItem>SUBMENU 2 </MenuItem>
            <SubMenu title={`$SUBMENU 3`}>
              <MenuItem>SUBMENU 3.1 </MenuItem>
              <MenuItem>SUBMENU 3.2 </MenuItem>
              <SubMenu title={`$SUBMENU 3.3`}>
                <MenuItem>SUBMENU 3.3.1 </MenuItem>
                <MenuItem>SUBMENU 3.3.2 </MenuItem>
                <MenuItem>SUBMENU 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          HOLA
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MenuContenido;
