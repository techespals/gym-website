import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Transformations from "../components/home/Transformations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Trainers from "../components/home/Trainers";
import MembershipPlans from "../components/home/MembershipPlans";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CommunityShowcase from "../components/home/CommunityShowcase";
import ContactCTA from "../components/home/ContactCTA";




function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Transformations/>
      <WhyChooseUs/>
      <Trainers/>
      <MembershipPlans />
      <Testimonials/>
      <FAQ/>
      <CommunityShowcase/>  
      <ContactCTA/>
    </>
  );
}

export default Home;
