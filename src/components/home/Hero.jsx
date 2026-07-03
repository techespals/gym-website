import Container from "../common/Container";
import Button from "../common/Button";

import heroImage from "../../assets/images/transformations/hero.png";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-wrapper">

          <div className="hero-content">

            <span className="hero-tag">
              🔥 INDIA'S ELITE FITNESS EXPERIENCE
            </span>

            <h1>
              BUILD YOUR <span>DREAM BODY</span>
              <br />
              TRANSFORM YOUR LIFE
            </h1>

            <p>
              World-class trainers, premium equipment,
              personalized programs, and a community that
              pushes you beyond your limits.
            </p>

            <div className="hero-buttons">
              <Button>Join Now</Button>

              <button className="secondary-btn">
                Watch Video
              </button>
            </div>

          </div>

          <div className="hero-image">
            <img
              src={heroImage}
              alt="Fitness Transformation"
              className="float"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;