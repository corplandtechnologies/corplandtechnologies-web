import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { offer } from "../../data/site";
import { ITrack } from "../../interfaces/site.interface";
import { SPRING, swap } from "../../utils/motion";
import Card from "../ui/Card/Card";
import MarkList from "../ui/MarkList/MarkList";
import Reveal from "../ui/Reveal/Reveal";
import Section from "../ui/Section/Section";
import Tabs, { panelId, tabId } from "../ui/Tabs/Tabs";
import "./Offer.scss";

export default function Offer() {
  const [active, setActive] = useState<ITrack["id"]>(offer.tracks[0].id);
  const track =
    offer.tracks.find((item) => item.id === active) || offer.tracks[0];

  return (
    <Section
      id="offer"
      tone="alt"
      title="Use it the way your project needs."
      lede="Maybe you have an idea and nothing built yet. Maybe your app is live and nobody is looking after it. A spot covers either, and the scope is small enough to finish."
    >
      <Reveal className="offer__tabs">
        <Tabs
          id="offer"
          label="What a spot covers"
          items={offer.tracks.map(({ id, label }) => ({ id, label }))}
          value={active}
          onChange={setActive}
        />
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={track.id}
          id={panelId("offer", track.id)}
          className="offer"
          role="tabpanel"
          aria-labelledby={tabId("offer", track.id)}
          variants={swap}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={SPRING}
        >
          <Card className="offer__included">
            <h3 className="offer__title">{track.title}</h3>
            <p className="offer__lede">{track.lede}</p>
            <MarkList title="Included" items={track.included} mark="yes" />
          </Card>
          <div className="offer__excluded">
            <MarkList title="Not included" items={track.excluded} mark="no" />
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
