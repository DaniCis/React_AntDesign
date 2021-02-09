import React, {useState,useEffect } from "react";
import {Dropdown} from "antd";

import {Link} from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import './MainLayout.css';

const NavBar = ({showSiderbar}) => {

  const [fechaActual,setfechaActual]=useState();

    useEffect(()=>{
      const mesNombres=['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto',
      'Septiembre','Octubre','Noviembre','Diciembre'];
      var date = new Date().getDate(); 
      var month = new Date().getMonth(); 
      var year = new Date().getFullYear();
      setfechaActual(mesNombres[month] +' '+ date +', '+year);
    },[]);

    const config = (<p>HOLA</p>
    );

    return (
      <nav className="navbar">
        <div  className="left">
          <div className="menubars left">
            <Link to="#" >
              <FaIcon.FaBars onClick={showSiderbar}/>
            </Link>
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
            <FaIcon.FaCartPlus  />
            </div>
            <div className="right">Usuario</div>
          </div> 
          <div className="right conf">
          <Dropdown overlay={config} trigger={['click']} >
            <FaIcon.FaCartPlus onClick={e => e.preventDefault()}/>
          </Dropdown> 
          </div>
        </div>   
      </nav>
    );
  };
  export default NavBar;