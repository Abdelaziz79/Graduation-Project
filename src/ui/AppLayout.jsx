import React from "react";
import NavBar from "./NavBar";
import { Row, Col, Container } from "react-bootstrap";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Row className="m-0 p-0">
      <Col className="col-2 m-0 p-0">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <NavBar />
        <main className="overflow-scroll">
          <Container
            className="mt-3"
            style={{ maxHeight: "90vh", minHeight: "90vh" }}
          >
            <Outlet />
          </Container>
        </main>
      </Col>
    </Row>
  );
}
