import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import DataTable from "react-data-table-component";

import FORM from "./FORM";

import { GET, DELETE } from "./service";
import { ErrorHandling } from "config/ErrorHandler";

const Products = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editData, setEditData] = React.useState({});
  const [tableData, setTableData] = useState([]);
  const [searchtableData, setSearchTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    setShowModal(false);
    setShowEditModal(true);
  };

  

  const getData = async () => {
    setLoading(true);
    const response = await ErrorHandling(GET);
    setLoading(false);
    setTableData(response?.data?.results);
    setSearchTableData(response?.data?.results);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
   
      const response =await ErrorHandling(DELETE,id) ;
      response.status == 200 && getData();
    
  };

  const customStyles = {
    rows: {
      style: {},
    },
    headCells: {
      style: {
        backgroundColor: "#3944BC",
        fontSize: "16px",
        fontWieght: "bold",
        color: "white",
      },
    },
    cells: {
      style: {},
    },
  };
  const handleSearch = (e) => {
    if (e.target.value.length) {
      let value = e.target.value.toLowerCase();
      let filterObj = searchtableData.filter(
        (el) =>
          el.name?.toLowerCase().includes(value) ||
          el.address?.toLowerCase().includes(value) ||
          el.phone?.toLowerCase().includes(value) ||
          el.email?.toLowerCase().includes(value)
      );
      setTableData(filterObj);
    } else {
      setTableData(searchtableData);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row, index) => (
        <div
          size="middle"
          className="d-flex justify-content-between align-items-center w-50"
        >
          <i
            class="fa fa-edit fa-lg"
            aria-hidden="true"
            onClick={() => {
              setEditData(row);
              setShowModal(true);
              setShowEditModal(true);
            }}
          ></i>
          <i
            class="fa fa-trash fa-lg"
            aria-hidden="true"
            onClick={() => {
              handleDelete(row.id);
            }}
          ></i>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
      <Container fluid style={{ marginTop: "-83px" }}>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header style={{ height: "80px" }}>
                <Card.Title
                  as="h4"
                  className="d-flex justify-content-between align-items-center "
                >
                  <span>Suppliers </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                      <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative bg-blue">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-search" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Search"
                            type="text"
                            onChange={handleSearch}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Form>
                    <Button
                      type="submit"
                      className="btn-sm btn-primary  btn-fill "
                      onClick={handleAdd}
                      style={{
                        height: "42px",
                        borderRadius: "20px",
                        width: "100px",
                      }}
                    >
                      Create New
                    </Button>
                  </div>
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0 tableStyle  my-0 py-0">
                <DataTable
                  columns={columns}
                  //   data={tableData}
                  data={tableData}
                  pagination={true}
                  customStyles={customStyles}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FORM
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        getData={getData}
        data={editData}
        editBool={showModal}
      />
    </div>
  );
};

export default Products;
