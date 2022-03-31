import CallToActionWithIllustration from "../components/CTAwithIllustration";
import FeaturesSplitWithImage from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TestimonialWithSpeechBubbles from "../components/Testimonial";
import TestimonialGrid from "../components/TestimonialGrid";

export default function Home() {
  return (
    <>
      <Header />
      <CallToActionWithIllustration />
      <FeaturesSplitWithImage />
      <TestimonialWithSpeechBubbles />
      <TestimonialGrid />
      <Footer />
    </>
  );
}
