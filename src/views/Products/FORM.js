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

  console.log("Data",data)
  
  const INITIAL_VALUES1 = {
    name: data.name,
    type: data.type,
    salePrice:data.salePrice,
    purchasePrice: data.purchasePrice,
    
  };

  const INITIAL_VALUES = {
    name: "",
    type: "",
    salePrice: "",
    purchasePrice: "",
    
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
                            Type
                          </label>
                        </div>
                        <Field
                          as="select"
                          name="type"
                          className="form-control"
                          onChange={(e) => {
                            setFieldValue("type", e.target.value);
                          }}
                        >
                          <option value="select role" defaultValue>
                            select product type
                          </option>
                          <option value="petrol">Petrol</option>
                          <option value="deisel">Deisel</option>
                          <option value="cng">CNG</option>
                          <option value="others">others</option>
                        </Field>
                        <div className="form-group">
                          <label htmlFor="emailid" className="mb-0">
                            Purchase Rate
                          </label>
                          <Field
                            name="purchasePrice"
                            type="number"
                            className="form-control"
                            placeholder="Enter purchase price"
                            onChange={handleChange}
                            value={values.purchasePrice}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="passwordid" className="mb-0">
                          Sale Rate
                          </label>
                          <Field
                            name="salePrice"
                            type="number"
                            className="form-control"
                            placeholder="Enter Sale Price"
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
