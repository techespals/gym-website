import "./WhyChooseUs.css";
import { whyChooseUs } from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">

        <div className="section-title center">
          <span>WHY CHOOSE US</span>

          <h2>
            Train Smarter.
            <br />
            Transform Faster.
          </h2>

          <p>
            Everything you need to achieve extraordinary results under one roof.
          </p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>10K+</h3>
            <p>Happy Members</p>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <p>Expert Coaches</p>
          </div>

          <div className="stat-card">
            <h3>98%</h3>
            <p>Retention Rate</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>

        </div>

        <div className="why-grid">

          {whyChooseUs.map((item) => (
            <div className="why-card" key={item.id}>

              <img
                src={item.icon}
                alt={item.title}
                className="why-icon"
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;