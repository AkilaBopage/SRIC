export default function About() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About SRIC Route Investments</h1>
        <p className="text-muted">
          Building global transport, infrastructure, and investment solutions
        </p>
      </div>

      {/* COMPANY INTRO */}
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p className="text-secondary">
            SRIC Route Investments is a forward-thinking company specializing in
            transport infrastructure, commercial vehicle export solutions, and
            international investment partnerships. We focus on building long-term
            value across global markets.
          </p>
        </div>

        <div className="col-md-6">
          <div className="bg-light rounded shadow-sm p-5 text-center">
            <h5 className="fw-bold">Global Presence</h5>
            <p className="text-muted mb-0">
              Asia • Europe • Middle East • Africa
            </p>
          </div>
        </div>

      </div>

      {/* VISION & MISSION CARDS */}
      <div className="row g-4 mb-5">

        <div className="col-md-6">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h4 className="fw-bold text-primary">Our Vision</h4>
              <p className="text-secondary mt-2">
                To become a global leader in smart transport systems, sustainable mobility,
                and large-scale infrastructure development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h4 className="fw-bold text-primary">Our Mission</h4>
              <p className="text-secondary mt-2">
                To connect countries through reliable transport solutions, advanced engineering,
                and high-quality commercial vehicles that support economic growth.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* VALUES SECTION */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Core Values</h3>

        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-bold">Integrity</h5>
              <p className="text-muted">Transparent and ethical business practices.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-bold">Innovation</h5>
              <p className="text-muted">Modern solutions for global transport challenges.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-bold">Sustainability</h5>
              <p className="text-muted">Building eco-friendly and long-term systems.</p>
            </div>
          </div>

        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center bg-dark text-white p-5 rounded">
        <h3 className="fw-bold">Let’s Build the Future Together</h3>
        <p className="text-light">
          Partner with SRIC Route Investments for global opportunities.
        </p>

        <button
          className="btn btn-primary mt-2"
          onClick={() => alert("Thank you for your interest!")}
        >
          Contact Us
        </button>
      </div>

    </div>
  );
}