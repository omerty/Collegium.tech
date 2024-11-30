import { ReactNode } from "react";

import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <Card grayer className="items-center gap-1 p-6 col">
      {children}
    </Card>
  );
};

export const FeatureBlocks = () => {
  return (
    <Section className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          Make Buying and Selling a{" "}
          <GradientText className="purple-teal">breeze</GradientText>
        </Title>
        <Details>
          Stop wasting your time. Collegium makes it easy.
        </Details>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>
          <ShuffleIcon />
          <BlockTitle>Campus-Only Listings
          </BlockTitle>
          <BlockText>
          Exclusive to your university, ensuring safety and relevance.
          </BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <SignalIcon />
          <BlockTitle>Smart Matching
          </BlockTitle>
          <BlockText>
          Find the perfect buyer or seller with intelligent search and recommendations.
          </BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <TalkingIcon />
          <BlockTitle>Instant Notifications
          </BlockTitle>
          <BlockText>
          Stay updated when someone’s interested in your listing.
          </BlockText>
        </Block>
        {/* Block 4 */}
        {/* <Block>
          <DoorIcon />
          <BlockTitle>Secure Transactions
          </BlockTitle>
          <BlockText>
          Use trusted payment methods designed for student needs.
          </BlockText>
        </Block> */}
        {/* Block 5 */}
        {/* <Block>
          <CardsIcon />
          <BlockTitle>Your workflow</BlockTitle>
          <BlockText>
            Keep using your browser and IDE without needing an extra window
          </BlockText>
        </Block> */}
        {/* Block 6 */}
        {/* <Block>
          <MagicIcon />
          <BlockTitle>Smarter inspect element</BlockTitle>
          <BlockText>
            Understand and modify the components making up your design with just
            one click
          </BlockText>
        </Block> */}
      </div>
    </Section>
  );
};
