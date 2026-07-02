export default function Contact() {
  return (
    <div className="container py-5" style={{ marginTop: "70px" }}>
      <h2>Contact Us</h2>

      <input className="form-control mt-3" placeholder="Name" />
      <input className="form-control mt-3" placeholder="Email" />
      <textarea className="form-control mt-3" placeholder="Message"></textarea>

      <button className="btn btn-dark mt-3">
        Send Message
      </button>
    </div>
  );
}