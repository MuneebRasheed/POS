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
    phone: data.phone,
    email:data.email,
    address: data.address,
    
  };

  const INITIAL_VALUES = {
    name: "",
    phone: "",
    email: "",
    address: "",
    
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
    

      const response = await ErrorHandling(CREATE,values) 
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
                    
                     { editBool? "Edit The Suppliers ":"Create New Suppliers"}
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
                            placeholder="Enter supplier name"
                            // value={data.name}
                            // onChange={handleChange}
                          
                         
                          />
                        </div>

                      
                        <div className="form-group">
                          <label htmlFor="emailid" className="mb-0">
                            Address
                          </label>
                          <Field
                            name="address"
                            type="text"
                            className="form-control"
                            placeholder="Enter  supplier address"
                            onChange={handleChange}
                        
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="passwordid" className="mb-0">
                          Phone
                          </label>
                          <Field
                            name="phone"
                            type="phone"
                            className="form-control"
                            placeholder="Enter supplier phone number"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="emailid" className="mb-0">
                            Email
                          </label>
                          <Field
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter supplier email"
                            onChange={handleChange}
                           
                          />
                        </div>
                        
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
