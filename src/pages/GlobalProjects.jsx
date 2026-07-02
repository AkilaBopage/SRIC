export default function GlobalProjects() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <h1 className="fw-bold text-dark">Global Projects</h1>

      <p className="text-muted">
        International investments and infrastructure partnerships.
      </p>

      <div className="row g-4 mt-3">

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Asia Transport Expansion</h5>
            <p>Cross-border logistics development.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Europe Investment Projects</h5>
            <p>Infrastructure and energy partnerships.</p>
          </div>
        </div>

      </div>
    </div>
  );
}