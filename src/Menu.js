import React,{useState} from "react";
import { Menu } from "antd";
import {
AppstoreOutlined,EyeOutlined,CalculatorOutlined,TeamOutlined,InboxOutlined,
ShoppingOutlined,UploadOutlined,ShoppingCartOutlined,SafetyOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

const MenuContenido= () => {
    return (
    <Menu className="site-layout-categorias"
    mode="inline"
    >
         <div className="site-layout-logo">
            <img src="https://confidentefinanciero.com/wp-content/uploads/2019/04/logo-wiam-2018.svg" alt="Logo" />
        </div> 
        <SubMenu className="menuPrincipal" key="parametros" 
            title={
            <div className="contenedorTitulo">
                <div className="Icono">
                    <AppstoreOutlined />
                </div>
                <div className="Titulo">
                    <div>Parámetros</div>
                </div>
            </div>} >
            <SubMenu key="parametros-empresa" className="submenu1" title="Empresa">
                <Menu.Item key="parametros-empresa-datos-empresa"> 
                    Datos Empresa
                </Menu.Item>
                <Menu.Item key="parametros-empresa-sucursal">
                    Sucursal
                </Menu.Item>
                <Menu.Item key="parametros-empresa-punto-emision">
                   Punto de Emisión
                </Menu.Item>
             </SubMenu>
            <SubMenu key="parametros-usuariosypermisos" className="submenu1" title="Usuarios y Permisos" >
            <Menu.Item key="parametros-usuariosypermisos-usuarios">
                Usuarios
            </Menu.Item>
            <Menu.Item key="parametros-usuariosypermisos-perfiles">
              Perfiles
            </Menu.Item>
            <Menu.Item key="parametros-usuariosypermisos-restringir">
                 Restringir Transacciones
            </Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu className="menuPrincipal" key="administracion"
            title={
            <div className="contenedorTitulo">
                 <div className="Icono">
                     <EyeOutlined/>
                 </div>
                 <div className="Titulo TituloLargo">
                    <div>Administración y Monitoreo</div>
                 </div>
            </div>} >
        </SubMenu>
        <SubMenu className="menuPrincipal" key="contabilidad"  
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <CalculatorOutlined/>
                </div>
                <div className="Titulo">
                    <div>Contabilidad</div>
                </div>
            </div> }>
            <SubMenu key="contabilidad-parametros" className="submenu1" title="Parámetros">
                <Menu.Item key="contabilidad-parametros-plancuentas">
                   plan cuentas
                </Menu.Item>
                <Menu.Item key="contabilidad-parametros-tiposcomprobante">
                    Compobantes
                </Menu.Item>
                <Menu.Item key="contabilidad-parametros-saldosiniciales">
                        Saldos
                    </Menu.Item>
                <Menu.Item key="contabilidad-parametros-bancos">
                       Bancos
                    </Menu.Item>
                <Menu.Item key="contabilidad-parametros-cuentasestados">
                       Cuentas de
                    </Menu.Item>
            </SubMenu>
            <SubMenu  className="submenu1 submenuLargo" title={
                    <p className="ConfigModulos">Configurar otros módulos</p>}>
            </SubMenu>
           
            <SubMenu className="submenu1" key="contabilidad-consultas" title="Consultas">
                    <Menu.Item key="contabilidad-consultas-plancuentas">
                            Plan de Cuentas
                    </Menu.Item>
                    <Menu.Item key="contabilidad-consultas-mayorgeneral">
                            Mayor General
                    </Menu.Item>
                    <Menu.Item key="contabilidad-consultas-diariogeneral">
                            Diario General
                    </Menu.Item>
                    <Menu.Item key="contabilidad-consultas-comprobantes">
                            Comprobantes
                    </Menu.Item>
                    <Menu.Item key="contabilidad-consultas-retencionesxtipo">
                            Retenciones x Tipo
                    </Menu.Item>
                </SubMenu>
            <SubMenu className="submenu1" title="Estados Financieros"></SubMenu>
        </SubMenu>
        <SubMenu className="menuPrincipal" 
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <AppstoreOutlined />
                </div>
                <div className="Titulo TituloLargo">
                    <div>Declaraciones e Impuestos</div>
                </div>
            </div> }>
        </SubMenu> 
        <SubMenu className="menuPrincipal" 
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <InboxOutlined />
                </div>
                <div className="Titulo">
                    <div>Inventario</div>
                </div>
            </div>
            } >
        </SubMenu>  
        <SubMenu className="menuPrincipal" 
            title={
            <div className="contenedorTitulo">
                <div className="Icono">
                    <ShoppingOutlined />
                </div>
                <div className="Titulo">
                    <div>Ventas</div>
                </div>
            </div>
            } >
        </SubMenu>
        <SubMenu className="menuPrincipal" 
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <ShoppingCartOutlined />
                </div>
                <div className="Titulo">
                    <div>Compras</div>
                </div>
            </div>
            } >
            </SubMenu>
        <SubMenu className="menuPrincipal"
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <ShoppingOutlined />
                </div>
                <div className="Titulo">
                    <div>Cuentas por cobrar</div>
                </div>
            </div>
            } ></SubMenu>
        <SubMenu className="menuPrincipal" 
            title={
                <div className="contenedorTitulo">
                <div className="Icono">
                    <ShoppingOutlined />
                </div>
                <div className="Titulo">
                    <div>Cuentas por pagar</div>
                </div>
            </div>
            } ></SubMenu>
    </Menu>
    );          
}
export default MenuContenido;
