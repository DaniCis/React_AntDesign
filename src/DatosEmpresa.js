import React from "react";
import {Layout, Card,Tooltip, Button,Select,Row,Col,Form,
  Input,Tabs,Popconfirm,
} from "antd";
import * as AiIcon from 'react-icons/ai';


const { Content } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8  },
  wrapperCol: { span: 13,offset:1 },
};

const DatosEmpresa = () => {
  
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const validateMessages = {
    types: {
      email: "Ingrese un correo válido",
      number: "Este campo debe ser numérico",
    },
    number: {
      range: "Debe ser un número entre ${min} y ${max}",
    },
  };


    return (
        <Content className="mt-2" style={{ margin: "0 16px" }}>
          <Card title='DatosEmpresa'>
            <Form
              className="ant-advanced-search-form"
              {...layout}
              form={form}
              onFinish={onFinish}
              validateMessages={validateMessages}
              encType="multipart/form-data"
            >
              <Row>
                <Col xs={23} sm={24} md={7} lg={7}>
                  <span className="ResulConsulta"></span>
                </Col>
                <Col xs={10} sm={10} md={{span:8, offset:6}} lg={{ span: 6, offset: 8 }} xl={{span:6,offset:10}}>
                  <div className="ContenedorBotones">
                    <Tooltip title="Registrar">
                      <Button className="Btn BtnRegistrar" htmlType="submit" >
                      <AiIcon.AiOutlineClose/>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Modificar">
                      <Button className="Btn BtnModificar" htmlType="submit" >
                      <AiIcon.AiOutlineClose/>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Limpiar">
                      <Button className="Btn BtnLimpiar" onClick={() => form.resetFields()} >
                      <AiIcon.AiOutlineClose/>
                      </Button>
                    </Tooltip>
                    <Popconfirm title='¿Está seguro de continuar?' okText="Sí" cancelText="No" >
                      <Tooltip title="Eliminar">
                        <Button className="Btn BtnEliminar" htmlType="submit" >
                        <AiIcon.AiOutlineClose/>
                        </Button>
                      </Tooltip>
                    </Popconfirm>
                  </div>
                </Col>
              </Row>
            
              <Tabs defaultActiveKey="1" type="card" >
                <TabPane tab="DATOS" key="1">
                  <br></br>
                  <Row>
                    <Col xs={24} sm={24} md={{span:16,offset:3}} lg={{ span: 7, offset: 6 }}>
                    <Form.Item name="consulta" label="Consulta" >
                      <Select className="Input">
                      </Select>
                    </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col  xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                      <Form.Item
                          name="emCodigo"
                          label="Consulta"
                          rules={[ { required: true, message: "Este campo es requerido" }, ]} >
                          <Input className="Input InputSmall" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                      <Form.Item
                      name="emNombre"
                      label="Consulta"
                      rules={[{ required: true, message: "Este campo es requerido" }, ]}>
                      <Input className="Input resize "/>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <Form.Item 
                        name="emPaId"
                        label="Consulta"
                        rules={[  { required: true, message: "Este campo es requerido" },]} >
                        <Select className="Input InputMediano sizeXS">
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                   <Col xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                    <Form.Item
                      name="emRazonSocial"
                      label="Consulta"
                      rules={[ { required: true, message: "Este campo es requerido" }, ]} >
                      <Input className="Input resize "  />
                    </Form.Item>
                   </Col>
                   <Col xs={24} sm={24} md={24} lg={9}>
                    <Form.Item
                      name="emCiudad"
                      label="Consulta"
                      rules={[ { required: true, message: "Este campo es requerido" }, ]} >
                      <Input className="Input InputMediano sizeXS"  />
                    </Form.Item>
                   </Col>
                 </Row>
                  <Row>
                   <Col xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                    <Form.Item
                      name="emDireccion"
                      label="Consulta"
                      rules={[ { required: true, message: "Este campo es requerido" },]}>
                      <Input className="Input resize " />
                    </Form.Item>
                   </Col>
                   <Col xs={24} sm={24} md={24} lg={9}>
                    <Form.Item
                      name="emTelefonoFijo" 
                      label="Consulta">
                      <Input className="Input InputMediano sizeXS"  />
                    </Form.Item>
                   </Col>
                 </Row>
                  <Row>
                  <Col xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                    <Form.Item
                      name="emSitioWeb"
                      label="Consulta">
                      <Input className="Input resize"/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={9}>
                    <Form.Item
                      name="emTelefonoCelular"
                      label="Consulta" >
                      <Input className="Input InputMediano sizeXS"/>
                    </Form.Item>
                  </Col>
                </Row>
                  <Row>
                  <Col xs={24} sm={24} md={24} lg={12} xl={{span:13,offset:1}}>
                  <Form.Item name="emEmail"  label="Consulta">
                      <Input className="Input resize" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={9}>
                    <Form.Item
                      name="emObservacion"
                      label="Consulta">
                      <TextArea rows={4} className="TextArea sizeXS "/>
                    </Form.Item>
                  </Col>
                </Row>
                </TabPane>

              </Tabs>
            </Form>
          </Card>
        </Content>
    );
 
};

export default DatosEmpresa;