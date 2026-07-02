
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <div className="text-center">
        <h1 className="display-4 fw-bold">
          Welcome to SRIC Investments
        </h1>

        <p className="lead text-muted mt-3">
          Building global infrastructure, transport systems, and investment solutions.
        </p>

           <button
        className="btn btn-primary btn-lg mt-3"
        onClick={() => navigate("/Projects")}
      >
        Explore Projects
      </button>
      </div>
    </div>
  );
}