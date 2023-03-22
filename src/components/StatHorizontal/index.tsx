import { Placeholder, Col, Row } from "reactstrap";
import CardWidget from "./CardWidget";

type CustomStatsHorizontalProps = {
  data: {
    description: string;
    count?: number;
    icon?: JSX.Element;
    color?: string;
  }[];
  loading?: boolean;
};

const CustomStatsHorizontal: React.FC<CustomStatsHorizontalProps> = ({
  data = [],
  loading,
}) => {
  if (loading)
    return (
      <Row>
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: 100, marginBottom: 20 }}
        >
          <Placeholder className="w-100 h-100" />
        </Placeholder>
      </Row>
    );
  return (
    <Row>
      {data.map((item) => (
        <Col key={`${item.description}_${item.count}`}>
          <CardWidget
            color={item.color}
            statTitle={item.description}
            icon={item.icon}
            stats={<h3 className="fw-bolder mb-75">{item.count}</h3>}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CustomStatsHorizontal;
