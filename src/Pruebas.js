import React ,{useState}from "react";
import { Form, Checkbox, DatePicker,Button } from 'antd';

const Pruebas = () => {

    const [form] = Form.useForm();
    const[checked,setChecked]=useState(false);
    const onChange = (e) => {
        if(e.target.checked){
            form.setFieldsValue({
                prueba1:1,
            });
        }else{
            form.setFieldsValue({
                prueba1:0,
            });
        }
        setChecked(!checked);
    };
    const onFinish =(fieldsValue)=>{
        const values = {
          ...fieldsValue,
          'fecha': fieldsValue['fecha'].format('YYYY-MM-DD'),
        };
        console.log('Received values of form: ', values);
    }

    const label = `${checked? 'Checked' : 'Unchecked'}`;
    return(
        <>
        <Form 
        form={form}
        onFinish={onFinish}> 
            <Form.Item name="prueba1" label={label}>
                <Checkbox onChange={onChange}/>
            </Form.Item>
            <Form.Item name="fecha">
                <DatePicker/>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                Enviar
                </Button>
            </Form.Item>
        </Form> 
        </>
    ); 
 }

export default Pruebas;