import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import StatisticBox from "./StatisticBox";

export default function UserInfo() {
  const { id } = useParams();
  return (
    <>
      <Row className="">
        <Col md={4} lg={2} sm={12}>
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="avatar"
            width={200}
            height={200}
          />
        </Col>
        <Col md={8} lg={10} sm={12}>
          <div className="mt-3">
            <h3>medo{id}</h3>
            <h5>medo@example.com</h5>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6} lg={6} sm={12} className="">
          <StatisticBox title={"Topics"}>
            <h3>5</h3>
          </StatisticBox>
        </Col>
        <Col md={6} lg={6} sm={12}>
          <StatisticBox title={"Explanations"}>
            <h3>5</h3>
          </StatisticBox>
        </Col>
      </Row>
    </>
  );
}
