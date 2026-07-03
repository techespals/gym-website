import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta">

      <div className="container">

        <div className="cta-card">

          <div className="cta-content">

            <span>START TODAY</span>

            <h2>
              Your Strongest
              <br />
              Version Starts Here.
            </h2>

            <p>
              Join hundreds of members transforming
              their lives through elite coaching,
              world-class facilities, and a community
              that pushes you to greatness.
            </p>

            <div className="cta-buttons">

              <button className="primary-btn">
                Join Membership
              </button>

              <button className="secondary-btn">
                Book Free Trial
              </button>

            </div>

          </div>

          <div className="cta-stats">

            <div className="stat-box">
              <h3>5K+</h3>
              <p>Members Trained</p>
            </div>

            <div className="stat-box">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>

            <div className="stat-box">
              <h3>12+</h3>
              <p>Expert Coaches</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;