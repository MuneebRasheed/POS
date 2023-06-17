import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import {UPDATE,CREATE}  from './service'

const Edit = ({ showModal, setShowModal, getData ,data,editBool}) => {
  
  const INITIAL_VALUES1 = {
    name: data.name,
    tank: data.tank,
   
    
  };

  const INITIAL_VALUES = {
    name: "",
    tank: ""
   
    
  };

  
 


  const edit = async (values) => {
    setShowModal(false);
    try {
      const response = await UPDATE(data.id,values)
      if (response?.status) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (values) => {
   
    setShowModal(false);
    try {

      const response = await CREATE(values);
      if (response?.status === 201) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={editBool?INITIAL_VALUES1:INITIAL_VALUES}
        onSubmit={async (values, { resetForm }) => {
          // alert("ascsdcfsdv");
          console.log(values, "sdshdgjhsdgsfg");
          if(editBool){
           
            edit(values);
          }else{
            create(values)
          }
          resetForm();
        }}
        enableReinitialize
      >
        {({ errors, setFieldValue,handleChange,values }) => (

          
          <Container fluid>
            {console.log("values..",values)}
            <Row>
              <Col md="12">
                <Modal
                  center
                  className="modal-large modal-primary admin-modal"
                  show={showModal}
                  onHide={() => setShowModal(false)}
                >
                  <Form>
                    <Modal.Header className="justify-content-center  admin-header ">
                      <div className="modal-title  ">
                    
                     { editBool? "Edit The Product ":"Create New Product"}
                      </div>
                    </Modal.Header>

                    <Modal.Body className="">
                      <div className="ml-3 mr-3">
                        <div className="form-group">
                          <label htmlFor="nameh" className="mb-0">
                            Name
                          </label>
                          <Field
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter product name"
                            // value={data.name}
                            // onChange={handleChange}
                          
                         
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="roleid" className="mb-0">
                            Tank
                          </label>
                        </div>
                        <Field
                          as="select"
                          name="tank"
                          className="form-control"
                          onChange={(e) => {
                            setFieldValue("tank", e.target.value);
                          }}
                        >
                          <option value="select tank" defaultValue>
                            select tank
                          </option>
                          <option value="tank1">Tank1</option>
                          <option value="tank2">Tank2</option>
                          <option value="tank3">Tank3</option>
                          <option value="others">others</option>
                        </Field>
                       
                        
                      </div>
                    </Modal.Body>

                    <div className="modal-footer align-items-baseline">
                      <button
                        type="submit"
                        className=" btn  btn-info btn-fill btn-block mb-2"
                      >
                     { editBool? "Update":"Add"}
                      </button>
                      <Button
                        className="btn-white btn-fill bg-red text-white"
                        type="button"
                        variant="link"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </Form>
                </Modal>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Edit;
