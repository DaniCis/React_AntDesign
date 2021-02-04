import React,{useState,useEffect} from 'react';
import { Switch } from 'antd';
import { UploadOutlined,UserOutlined} from '@ant-design/icons';
import {Menu,Button,Dropdown,Drawer} from "antd";
import './MainLayout.css';

const Navbar = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {

    const [fechaActual,setfechaActual]=useState();

    useEffect(()=>{
        const mesNombres=['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto',
        'Septiembre','Octubre','Noviembre','Diciembre'];
        var date = new Date().getDate(); 
        var month = new Date().getMonth(); 
        var year = new Date().getFullYear();
        setfechaActual(mesNombres[month] +' '+ date +', '+year);
      },[]);
  
      
      const config = (
        <Menu>
          <Menu.Item key="0">
            <a>Opciones</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Cambiar Idioma</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a>Cambiar Periodo</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a>Cerrar Sesión</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a>Salir</a>
          </Menu.Item>
        </Menu>
    );

  return (
    <nav className="navbar">
        <div  className="left">
          <div className="trigger left">
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <UploadOutlined />
            </div>
          </div>
          <div >
        <Switch
          onChange={handleCollapsedChange}
          checked={collapsed}
        />
        <span> Collapsar</span>
      </div>
          <div className="responsive left">
            <p>{fechaActual}</p>
          </div>
        </div> 
        <div className="center"><p>NOMBRE EMPRESA</p></div>
        <div className="right">
          <p className="responsive right">Periodo: 2020</p>
          <div className="responsive right usuario">
            <div className="userIcon right">
              <UserOutlined />
            </div>
            <div className="right">Usuario</div>
          </div> 
          <div className="right conf">
          <Dropdown overlay={config} trigger={['click']} >
            <UserOutlined  onClick={e => e.preventDefault()}/>
          </Dropdown> 
          </div>
        </div>    
      </nav>
   
  );
};

export default Navbar;
