import React from "react";
import scroll from "../../utils/helpers/scroll";
import Button from "../../components/ui/Button/Button";
import Masthead from "../../components/ui/Masthead/Masthead";

export default function Hero() {
  return (
    <Masthead
      id="hero"
      title="Your first four weeks are on us."
      lede="No budget for a developer yet? Ten founders get four weeks of our work at no fee, to build an MVP or look after a live app. You own every line of code. We get a case study."
      actions={
        <>
          <Button size="lg" arrow onClick={() => scroll("contact")}>
            Apply for a spot
          </Button>
          <Button size="lg" variant="quiet" onClick={() => scroll("work")}>
            See what we have built
          </Button>
        </>
      }
    />
  );
}
