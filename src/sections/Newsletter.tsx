import { NewsletterSpheres } from "../svg/NewsletterSpheres";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { WaitlistForm } from "../components/WaitlistForm";


const Background = () => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres />
  </div>
);

export const Newsletter = () => {
  return (
    <Section className="px-4 dark sm:px-12">
      <Card className="w-full px-4 py-16 overflow-hidden sm:px-16">
        <Background />
        <div className="gap-6 text-center md:text-left col md:w-1/2 ">
          <h2 className="text-3xl font-bold text-gray-100">
            Join Collegium Today
          </h2>
          <p className="text-lg text-light">
          Join now and help us shape the future of campus marketplaces. We are actively looking for front-end Developers. If you want to help email mdomermohi@gmail.com!
          </p>
          {/* <WaitlistForm id="newsletter-waitlist" /> */}
        </div>
      </Card>
    </Section>
  );
};
