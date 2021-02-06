import './App.css';
import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import { Layout,Menu,Dropdown} from "antd";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const App =() =>{
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    
    </>
  );
}
export default App;
