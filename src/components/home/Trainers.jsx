import "./Trainers.css";
import { trainers } from "../../data/trainers";

function Trainers() {
  const featuredTrainer = trainers.find(
    (trainer) => trainer.featured
  );

  const otherTrainers = trainers.filter(
    (trainer) => !trainer.featured
  );

  return (
    <section className="trainers">
      <div className="container">

        <div className="section-title trainers-title">
          <span>MEET THE ELITE</span>

          <h2>
            Coaches Who
            <br />
            Deliver Results
          </h2>

          <p>
            Industry experts, transformation specialists,
            and certified professionals committed to
            unlocking your strongest version.
          </p>
        </div>

        {/* Featured Trainer */}

        <div className="featured-trainer">

          <div className="featured-image">
            <img
              src={featuredTrainer.image}
              alt={featuredTrainer.name}
            />
          </div>

          <div className="featured-content">

            <span className="featured-badge">
              HEAD COACH
            </span>

            <h3>{featuredTrainer.name}</h3>

            <h4>{featuredTrainer.role}</h4>

            <p>
              {featuredTrainer.experience} of helping
              thousands achieve elite-level
              transformations through science-backed
              coaching and world-class training systems.
            </p>

            <div className="trainer-tags">
              {featuredTrainer.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

          </div>

        </div>

        {/* Remaining Trainers */}

        <div className="trainers-grid">

          {otherTrainers.map((trainer) => (
            <div
              className="trainer-card"
              key={trainer.id}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className={
                  trainer.name === "Aditi Sharma"
                    ? "trainer-image female-trainer"
                    : "trainer-image"
                }
              />

              <div className="trainer-overlay">

                <h3>{trainer.name}</h3>

                <p>{trainer.role}</p>

                <span>
                  {trainer.experience}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trainers;