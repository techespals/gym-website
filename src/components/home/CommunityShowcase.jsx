import "./CommunityShowcase.css";
import { communityPosts } from "../../data/communityData";

function CommunityShowcase() {
  return (
    <section className="community">
      <div className="container">

        <div className="section-title community-title">
          <span>OUR COMMUNITY</span>

          <h2>
            More Than A Gym.
            <br />
            A Lifestyle.
          </h2>

          <p>
            Join a thriving community of athletes,
            creators, and people committed to becoming
            their strongest selves.
          </p>
        </div>

        <div className="community-grid">

          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="community-card"
            >
              <img
                src={post.image}
                alt={post.title}
              />

              <div className="community-overlay">
                <span>{post.tag}</span>
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CommunityShowcase;