import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <div className="bg-dark text-white text-center py-5" style={{ marginTop: "70px" }}>
        <div className="container py-5">

          <h1 className="display-4 fw-bold">
            Our Projects
          </h1>

          <p className="lead text-light mt-3">
            Explore SRIC Route Investments global infrastructure and development projects.
          </p>

        </div>
      </div>

      {/* PROJECT NAV CARDS */}
      <div className="container py-5">

        <div className="row g-4">

          {/* SRI LANKA PROJECTS */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 h-100">

              <div className="card-body text-center p-5">

                <h2 className="fw-bold text-primary">
                  Sri Lanka Projects
                </h2>

                <p className="text-muted mt-3">
                  Local infrastructure, transport systems, and development projects across Sri Lanka.
                </p>

                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/sri-lanka-projects")}
                >
                  View Sri Lanka Projects
                </button>

              </div>

            </div>
          </div>

          {/* GLOBAL PROJECTS */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 h-100">

              <div className="card-body text-center p-5">

                <h2 className="fw-bold text-dark">
                  Global Projects
                </h2>

                <p className="text-muted mt-3">
                  International investment projects across Asia, Europe, and other markets.
                </p>

                <button
                  className="btn btn-dark mt-3"
                  onClick={() => navigate("/global-projects")}
                >
                  View Global Projects
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}