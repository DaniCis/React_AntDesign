import React,{Component} from 'react';

//función expresada
const Componente = props =>     <h2>{props.msg}</h2>

/* Funcion declarada
function Componente(props){
    return  <h2>{props.msg}</h2>
} */

/* 
CLASES
//class Componente extends React.Component
class Componente extends Component{
    render(){
        return(
        <h2>{this.props.msg}</h2>
        );
    }
}
 */
export default Componente;