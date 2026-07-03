import "./Testimonials.css";
import { testimonials } from "../../data/testimonialsData";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title testimonials-title">
          <span>TESTIMONIALS</span>

          <h2>
            Real Stories.
            <br />
            Real Results.
          </h2>

          <p>
            Thousands of members have transformed their
            lives with our coaching, community, and
            commitment to excellence.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <div
              className="testimonial-card"
              key={item.id}
            >

              <div className="quote-mark">
                "
              </div>

              <div className="stars">
                ★★★★★
              </div>

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-user">

                <div className="user-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;