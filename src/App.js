import './App.css';
import React,{useState} from 'react';
import Navbar from './Navbar';
import { Layout} from "antd";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './MainLayout.css';
import './Globales.css';
import MenuContenido from './Menu';
import DatosEmpresa from './DatosEmpresa';

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
        
      {React.createElement(sidebar ? 'div':'br',{className:'overlay'})}
      <div className={sidebar ? 'sidebar active' : 'sidebar' }>
        
        <Sider className="site-layout-menu">
          <MenuContenido  showSiderbar={showSiderbar}/>
        </Sider>
        </div>
        <Layout>
          <Header className="site-layout-header"> 
            <Navbar  showSiderbar={showSiderbar}/>
          </Header>
          <Content className="site-layout-content">
              <Switch>
                <Route path='/DatosEmpresa' >
                  <DatosEmpresa/>
                </Route>
                
              </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
    </>
  );
}
export default App;
