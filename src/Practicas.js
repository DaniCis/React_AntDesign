import React from "react";
import Componente from './components/Componente';
import Propiedades from "./components/Propiedades";

const Practicas = () => {

    return (
        <>
        <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
        <Propiedades 
            cadena="Esta es una cadena" 
            numero={22} 
            boolean={true}
            arreglo={[1,2,3]}
            objeto={{nombre:"Dani",correo:"danicisneros2@hotmail.com"}}
            funcion={(num)=>num*num}
            elementoReact={<i>Esto es un elemento react</i>}
            componenteReact={<Componente msg="soy un componente pasado como prop"/>}
        />
        </>
    );
};

export default Practicas;