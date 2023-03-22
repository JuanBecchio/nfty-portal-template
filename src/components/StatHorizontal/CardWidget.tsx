import classnames from "classnames";
import { Card, CardBody } from "reactstrap";

type CardWidgetProps = {
  icon?: JSX.Element;
  color?: string;
  stats?: string | JSX.Element;
  statTitle?: string;
  className?: string;
  statsMargin?: string;
};
const CardWidget: React.FC<CardWidgetProps> = ({
  icon,
  color,
  stats,
  statTitle,
  className,
  statsMargin,
}) => {
  return (
    <Card>
      <CardBody className={className}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {typeof stats === "string" ? (
              <h2
                className={classnames("fw-bolder", {
                  "mb-0": !statsMargin,
                  [statsMargin || ""]: statsMargin,
                })}
              >
                {stats}
              </h2>
            ) : (
              stats
            )}

            <p className="card-text">{statTitle}</p>
          </div>
          <div
            className={`avatar avatar-stats p-50 m-0 ${
              color ? `bg-light-${color}` : "bg-light-primary"
            }`}
          >
            <div className="avatar-content">{icon}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardWidget;
