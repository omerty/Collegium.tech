import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Demo } from "../components/Demo";
import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";
import { WaitlistForm } from "../components/WaitlistForm";

// Built with Vivid (https://vivid.lol) ⚡️

const Background = () => (
  <div
    className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
    aria-hidden="true"
  >
    <ScatteredSpheres />
  </div>
);

export const Hero = () => {
  return (
    <Section
      gradients
      className="items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col md:flex-row"
    >
      <Background />
      {/* Text */}
      <div className="z-10 gap-4 text-center col md:text-left">
        <Title size="lg">
          A <GradientText className="pink-blue">marketplace.</GradientText>
          <br />
          for <GradientText className="purple-teal">students.</GradientText>
        </Title>
        <Details>
          Simplify student life with Collegium, the ultimate platform for buying, selling, and trading within your campus community.
        </Details>
        {/* <WaitlistForm
          id="hero-waitlist"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        /> */}
      </div>
      {/* Image */}
      <Demo
        data-aos="fade-left"
        webmSrc="/videos/total.webm"
        mp4Src="/videos/total.mp4"
        alt="A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing"
      />
    </Section>
  );
};
