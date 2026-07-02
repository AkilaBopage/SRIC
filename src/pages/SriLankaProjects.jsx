export default function SriLankaProjects() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <h1 className="fw-bold text-primary">Sri Lanka Projects</h1>

      <p className="text-muted">
        Local infrastructure and transport development projects in Sri Lanka.
      </p>

      <div className="row g-4 mt-3">

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Bus Transport System</h5>
            <p>Modernizing national bus infrastructure.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Logistics Network</h5>
            <p>Improving cargo and transport efficiency.</p>
          </div>
        </div>

      </div>
    </div>
  );
}