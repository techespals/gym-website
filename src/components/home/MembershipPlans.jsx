import "./MembershipPlans.css";
import { plans } from "../../data/membershipPlans";
import { useState } from "react";

function MembershipPlans() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="membership-plans">
      <div className="container">

        <div className="section-title membership-title">
          <span>MEMBERSHIP</span>

          <h2>
            Choose Your
            <br />
            Transformation Plan
          </h2>

          <p>
            Flexible memberships designed for beginners,
            athletes, and serious fitness enthusiasts.
          </p>
        </div>

        {/* Toggle */}

        <div className="billing-toggle">

          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
            <span>Save 25%</span>
          </button>

        </div>

        {/* Plans */}

        <div className="plans-grid">

          {plans.map((plan) => {

            const price =
              billing === "monthly"
                ? plan.monthly
                : plan.yearly;

            return (
              <div
                key={plan.id}
                className={`plan-card ${
                  plan.popular ? "popular" : ""
                }`}
              >

                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <h3>{plan.name}</h3>

                <div className="price">

                  <span className="currency">₹</span>

                  {price}

                  <small>
                    /
                    {billing === "monthly"
                      ? "mo"
                      : "yr"}
                  </small>

                </div>

                <ul>

                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}

                </ul>

                <button className="plan-btn">
                  {plan.buttonText}
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default MembershipPlans;