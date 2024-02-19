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
        className={`trans col-2 m-0 p-0  `}
        style={{ width: show ? "200px" : "0px" }}
      >
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <NavBar />
        <SliderToggleButton />
        <main className="overflow-auto main">
          <Container className="h-100 my-3 mx-auto ">
            <Row>
              <Col sm={12} md={12} lg={9} className="mx-auto">
                <Outlet />
              </Col>
            </Row>
          </Container>
        </main>
      </Col>
    </Row>
  );
}
