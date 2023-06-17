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
import { ErrorHandling } from "config/ErrorHandler";

const Edit = ({ showModal, setShowModal, getData ,data,editBool}) => {

  console.log("Data",data)
  
  const INITIAL_VALUES1 = {
    name: data.name,
    unit: data.unit,
    dispenser:data.dispenser,

    
  };

  const INITIAL_VALUES = {
    name: "",
    unit: "",
    dispenser: "",
 
    
  };

  
 


  const edit = async (values) => {
    setShowModal(false);
    
      const response = await ErrorHandling(UPDATE,data.id,values)
      if (response?.status) {
        setShowModal(false);
        getData();
      }
   
  };

  const create = async (values) => {
   
    setShowModal(false);
  

      const response = await ErrorHandling(CREATE,values);
      if (response?.status === 201) {
        setShowModal(false);
        getData();
      }
    
  };

  return (
    <>
      <Formik
        initialValues={editBool?INITIAL_VALUES1:INITIAL_VALUES}
        onSubmit={async (values, { resetForm }) => {
          console.log(values, "sdshdgjhsdgsfg");
          if(editBool){
            console.log("dataedit")
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
                            Filling Unit
                          </label>
                        </div>
                        <Field
                          as="select"
                          name="unit"
                          className="form-control"
                          onChange={(e) => {
                            setFieldValue("unit", e.target.value);
                          }}
                        >
                          <option value="select filling unit" defaultValue>
                            select Filling unit
                          </option>
                          <option value="liter">Liter</option>
                          <option value="kg">KG</option>
                          <option value="no">NO</option>
                          
                        </Field>

                        <div className="form-group">
                          <label htmlFor="roleid" className="mb-0">
                            Dispenser
                          </label>
                        </div>
                        <Field
                          as="select"
                          name="dispenser"
                          className="form-control"
                          onChange={(e) => {
                            setFieldValue("dispenser", e.target.value);
                          }}
                        >
                          <option value="select dispenser" defaultValue>
                            select dispenser
                          </option>
                          <option value="dispenser 2">dispenser2</option>
                          <option value="dispenser 1">dispenser1</option>
                          <option value="dispenser 3">dispenser3</option>
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
