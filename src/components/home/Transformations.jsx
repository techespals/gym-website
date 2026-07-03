import "./Transformations.css";
import { transformations } from "../../data/transformations";

function Transformations() {
  return (
    <section className="transformations">
      <div className="container">

        <div className="section-heading">
          <span>SUCCESS STORIES</span>

          <h2>
            Real People.
            <br />
            Real Transformations.
          </h2>

          <p>
            Thousands have transformed their bodies and lives with our
            coaching system. Yours could be next.
          </p>
        </div>

        <div className="transform-grid">
          {transformations.map((item) => (
            <div key={item.id} className="transform-card">

              <div className="transform-image">
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="overlay"></div>

                <div className="transform-content">
                  <h3>{item.name}</h3>

                  <p>{item.result}</p>

                  <span>{item.duration} Journey</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Transformations;