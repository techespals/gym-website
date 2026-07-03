import { useState } from "react";
import "./FAQ.css";
import { faqs } from "../../data/faqData";

function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="container">

        <div className="section-title faq-title">
          <span>FAQ</span>

          <h2>
            Questions We
            <br />
            Get Every Day
          </h2>

          <p>
            Everything you need to know before starting
            your transformation journey.
          </p>
        </div>

        <div className="faq-list">

          {faqs.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${
                active === item.id ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <span>{item.question}</span>

                <div className="faq-icon">
                  {active === item.id ? "−" : "+"}
                </div>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;