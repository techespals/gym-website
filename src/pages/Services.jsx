import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import servicesData from "../data/servicesData";

import "./Services.css";

function Services() {
  return (
    <section className="services">

      <Container>

        <SectionTitle
          subTitle="WHY CHOOSE US"
          title={
            <>
              TRAIN LIKE AN
              <br />
              ATHLETE
            </>
          }
        />

        <div className="services-grid">

          {servicesData.map((service) => (

            <article
              className="service-card"
              key={service.id}
            >

              <span className="service-number">
                0{service.id}
              </span>

              <div className="icon-wrapper">

                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />

              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </article>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Services;