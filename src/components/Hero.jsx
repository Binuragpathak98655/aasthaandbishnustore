export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Fresh & Organic Groceries<br /><span>Delivered to Your Doorstep</span></h1>
          <p>Your one-stop shop for fresh fruits, vegetables, dairy, and pantry essentials. Quality you can trust, prices you'll love.</p>
          <a href="#products" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Shop Now
          </a>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" alt="Fresh groceries" />
        </div>
      </div>
    </section>
  );
}
