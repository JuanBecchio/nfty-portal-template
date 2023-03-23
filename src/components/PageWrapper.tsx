const PageWrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => (
  <div className="blank-page">
    <div className="app-content content">
      <div className="content-wrapper">
        <div className="content-body">{children}</div>
      </div>
    </div>
  </div>
);

export default PageWrapper;
