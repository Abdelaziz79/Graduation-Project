import React from "react";
import NavBar from "./NavBar";
import { Row, Col, Container } from "react-bootstrap";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Row>
      <Col className="col-2 p-0">
        <SideBar />
      </Col>
      <Col className="p-0">
        <NavBar />
        <Container className="mt-3">
          <Outlet />
        </Container>
      </Col>
    </Row>
  );
}
