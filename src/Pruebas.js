import React ,{useState}from "react";
import {Checkbox} from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";


const Pruebas = () => {

    const[checked,setChecked]=useState(false);
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(!checked);
    };

    const label = `${checked? 'Checked' : 'Unchecked'}`;
    return(
        <>
          <Form > 
          <FormItem label={label}>
            <Checkbox onChange={onChange}/>
        </FormItem>
        </Form> 
        </>
    ); 
 }

export default Pruebas;