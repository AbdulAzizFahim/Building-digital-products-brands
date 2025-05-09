import TestimonialComp from "../components/Testimonial/Testimonial";

const data = {
  text: "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  author: "Micheal Gough",
  title: "CEO at Google",
};

export default function Testimonial() {
  return <TestimonialComp data={data} />;
}
