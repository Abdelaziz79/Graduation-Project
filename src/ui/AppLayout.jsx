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
    <Row className="m-0 p-0 main">
      <Col className={` p-0 m-0 col-2 trans ${show ? "" : "hide"} `}>
        <SideBar />
      </Col>
      <Col className={`main p-0 m-0 trans ${show ? "col-10" : "col-12"} `}>
        <NavBar />
        <SliderToggleButton />
        <main className="overflow-auto p-3">
          <Container>
            <Outlet />
          </Container>
        </main>
      </Col>
    </Row>
  );
}
