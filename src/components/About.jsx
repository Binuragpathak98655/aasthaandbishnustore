export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>At Aastha & Bishnu Store, we believe everyone deserves access to fresh, healthy food. Founded in 2024, we are a family-owned grocery store committed to sourcing the finest produce, dairy, and pantry staples from local farmers and trusted suppliers.</p>
          <p>We prioritize quality, sustainability, and community. Every item on our shelf is chosen with care — because your family deserves nothing less.</p>
          <div className="about-stats">
            <div><span>500+</span> Happy Customers</div>
            <div><span>100+</span> Fresh Products</div>
            <div><span>50+</span> Local Partners</div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80" alt="Our store" />
        </div>
      </div>
    </section>
  );
}
