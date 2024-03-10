import TableComp from "../features/topics/TableComp";
import StatisticBox from "./StatisticBox";
import TopicsStatistic from "./TopicsStatistic";
import LevelStatistic from "./LevelStatistic";

import { useExplanation } from "../features/explanation/useExplanation";
import { Col, Row, Spinner } from "react-bootstrap";

export default function DashboardPage() {
  const { isLoading, explanationTopics } = useExplanation();

  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Col md={12} lg={8} sm={12}>
        <StatisticBox title={"Topics"}>
          <TopicsStatistic />
        </StatisticBox>
      </Col>
      <Col md={12} lg={4} sm={12}>
        <StatisticBox title={"Average level"}>
          <LevelStatistic />
        </StatisticBox>
      </Col>
      <Col md={12} lg={12}>
        <StatisticBox title={"Explanations"}>
          <TableComp explanations={explanationTopics} />
        </StatisticBox>
      </Col>
      <Col>
        <StatisticBox title={"reports"} />
      </Col>
    </Row>
  );
}
