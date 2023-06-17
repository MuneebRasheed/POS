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
import { UPDATE, CREATE } from "./service";
import { ErrorHandling } from "config/ErrorHandler";

const Edit = ({ showModal, setShowModal, getData, data, editBool }) => {
  console.log("Datasss", data);

  const INITIAL_VALUES1 = {
    name: data?.name,
    address: data?.address,
    phone: data?.phone,
    no: data?(data.vehicles[0].no):"",
    description: data?data.vehicles[0].description:"",
    product: data?data.discount[0].product:"",
    percentage: data?data.discount[0].percentage:"",
  };

  const INITIAL_VALUES = {
    name: "",
    address: "",
    phone: "",
    no: "", 
    description: "" ,
    product: "",
    percentage: "",
     
  };

  const edit = async (values) => {
    var temp = {
      name: values.name,
      address: values.address,
      phone: values.phone,
      vehicles: [{ no: values.no, description: values.description }],
      discount: [
        {
          product: values.product,
          percentage: values.percentage,
        },
      ],
    };
    setShowModal(false);
    
      const response = await ErrorHandling(UPDATE, data.id, temp);
      if (response?.status) {
        setShowModal(false);
        getData();
      }
   
  };

  const create = async (values) => {
    console.log("customers", values);

    var temp = {
      name: values.name,
      address: values.address,
      phone: values.phone,
      vehicles: [{ no: values.no, description: values.description }],
      discount: [
        {
          product: values.product,
          percentage: values.percentage,
        },
      ],
    };

    setShowModal(false);
    
      const response = await ErrorHandling(CREATE, temp);
      if (response?.status === 201) {
        setShowModal(false);
        getData();
      }
    
  };

  return (
    <>
      <Formik
        initialValues={editBool ? INITIAL_VALUES1 : INITIAL_VALUES}
        onSubmit={async (values, { resetForm }) => {
          console.log(values, "sdshdgjhsdgsfg");
          if (editBool) {
            console.log("dataedit");
            edit(values);
          } else {
            create(values);
          }
          resetForm();
        }}
        enableReinitialize
      >
        {({ errors, setFieldValue, handleChange, values }) => (
          <Container fluid>
            {console.log("values..", values)}
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
                        {editBool
                          ? "Edit The Customer "
                          : "Create New Customer"}
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
                            placeholder="Enter  name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nameh" className="mb-0">
                            Phone
                          </label>
                          <Field
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="Enter Phone"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nameh" className="mb-0">
                            Address
                          </label>
                          <Field
                            name="address"
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                        {/* <label htmlFor="roleid" className="mb-1 pt-0">
                          Vehical
                        </label> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="form-group">
                            <label htmlFor="emailid" className="mb-0">
                              Vehical No.
                            </label>
                            <Field
                              name="no"
                              type="text"
                              className="form-control"
                              placeholder="Enter Vehical No."
                              
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="emailid" className="mb-0">
                              Description
                            </label>
                            <Field
                              name="description"
                              type="text"
                              className="form-control"
                              placeholder="Enter Description"
                            
                            />
                          </div>
                        </div>
                        {/* <label htmlFor="roleid" className="mb-1 pt-0">
                            Discount
                        </label> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="form-group">
                            <label htmlFor="roleid" className="mb-0">
                              Product
                            </label>
                            <Field
                              as="select"
                              name="product"
                              className="form-control"
                              onChange={(e) => {
                                setFieldValue("product", e.target.value);
                              }}
                            >
                              <option value="select product" defaultValue>
                                select product type
                              </option>
                              <option value="petrol">Petrol</option>
                              <option value="deisel">Deisel</option>
                              <option value="cng">CNG</option>
                              <option value="others">others</option>
                            </Field>
                          </div>

                          <div className="form-group">
                            <label htmlFor="emailid" className="mb-0">
                              Discount %
                            </label>
                            <Field
                              name="percentage"
                              type="number"
                              className="form-control"
                              placeholder="Enter discount"
                              
                            />
                          </div>
                        </div>
                      </div>
                    </Modal.Body>

                    <div className="modal-footer align-items-baseline">
                      <button
                        type="submit"
                        className=" btn  btn-info btn-fill btn-block mb-2"
                      >
                        {editBool ? "Update" : "Add"}
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
