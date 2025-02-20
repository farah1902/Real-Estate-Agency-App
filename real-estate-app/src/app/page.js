import AgentsSection from "./components/AgentsSection";
import Hero from "./components/Hero";
import PropertiesSection from "./components/PropertiesSection";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      <main id="main">
        {/* services section */}
        <Services />
        {/* properties section */}
        <PropertiesSection />
        {/* agents section */}
        <AgentsSection />
        {/* tetimonials section */}
      </main>
    </>
  );
}
