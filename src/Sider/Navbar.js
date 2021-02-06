import React ,{useState}from 'react';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SiderData} from './SiderData';
import {IconContext} from 'react-icons';
import "./App.css";

const Navbar =() =>{

  const [sidebar,setsidebar]=useState(false);

  const showSiderbar =()=>{
    setsidebar(!sidebar);
  }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcon.FaBars onClick={showSiderbar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
      <ul className='nav-menu-items' onClick={showSiderbar}>
        <li className='navbar-toggle'>
          <Link  to="#" className="menu-bars">
            <AiIcon.AiOutlineClose/>
          </Link>
        </li>
        {SiderData.map((item,index)=>{
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>        
    </nav>
    </IconContext.Provider>
    </>
  );
}
export default Navbar;
