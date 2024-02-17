import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SliderToggleButton from "./SliderToggleButton";

import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useSliderToggle } from "../context/SliderToggleContext";

export default function AppLayout() {
  const { show } = useSliderToggle();

  return (
    <Row className="m-0 p-0">
      <Col
        className={`col-2 m-0 p-0 `}
        style={{ width: show ? "200px" : "0px", transition: "all 0.3s ease" }}
      >
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <NavBar />
        <SliderToggleButton />
        <main className="overflow-auto" style={{ height: "92vh" }}>
          <Container className="mt-3 " style={{ height: "100%" }}>
            <Outlet />
          </Container>
        </main>
      </Col>
    </Row>
  );
}
