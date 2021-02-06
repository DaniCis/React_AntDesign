import './App.css';
import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import { Layout,Menu,Dropdown} from "antd";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './MainLayout.css';
import MenuContenido from './Menu.js';

const { Header, Sider, Content } = Layout;

const App =() =>{

const [sidebar,setsidebar]=useState(false);
const showSiderbar =()=>{
  setsidebar(!sidebar);
}
  return (
    <>
    <Router>
      <Layout>
      <div className={sidebar ? 'sidebar active' : 'sidebar' }>
        <Sider className="site-layout-menu">
          <MenuContenido className="site-layout-categorias" showSiderbar={showSiderbar}/>
        </Sider>
        </div>
        <Layout>
          <Header className="site-layout-header"> 
            <Navbar  showSiderbar={showSiderbar}/>
          </Header>
          <Content className="site-layout-content">
              <Switch>
                <Route path='/' />
              </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
    </>
  );
}
export default App;
