export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to place a bulk order? We'd love to hear from you.</p>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="contact-info">
            <div><i className="fas fa-map-marker-alt"></i> 123 Grocery Lane, Fresh Town, USA</div>
            <div><i className="fas fa-phone"></i> (555) 123-4567</div>
            <div><i className="fas fa-envelope"></i> hello@aasthaandbishnustore.com</div>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
