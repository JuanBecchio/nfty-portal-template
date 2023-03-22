const Footer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center fw-bold">
      <span>COPYRIGHT © {new Date().getFullYear()}</span>
      <div
        style={{
          width: 10,
          height: 1,
          backgroundColor: "gray",
          margin: "0 4px",
        }}
      />
      <span>
        Powered by{" "}
        <a
          href="https://nftydoor.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 600 }}
        >
          NFTY<span className="text-black">Door</span>
        </a>
      </span>
    </div>
  );
};

export default Footer;
