import { Button } from "reactstrap";
import BrandLogo from "./BrandLogo";

const ErrorPage: React.FC<{ href?: string }> = ({ href = "/" }) => {
  return (
    <div className="misc-wrapper">
      <BrandLogo />
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
          <p className="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <Button
            tag="a"
            href={href}
            color="primary"
            className="btn-sm-block mb-2"
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
