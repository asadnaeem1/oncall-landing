import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatItDoes from "@/components/WhatItDoes";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import FollowUpBoss from "@/components/FollowUpBoss";
import NoDisruption from "@/components/NoDisruption";
import WhatItDoesnt from "@/components/WhatItDoesnt";
import WhoItsFor from "@/components/WhoItsFor";
import Compliance from "@/components/Compliance";
import FoundingClients from "@/components/FoundingClients";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <Hero />
        <Problem />
        <WhatItDoes />
        <Demo />
        <HowItWorks />
        <FollowUpBoss />
        <NoDisruption />
        <WhatItDoesnt />
        <WhoItsFor />
        <Compliance />
        <FoundingClients />
        <Faq />
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
