import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing)' }}>
      <Hero />
      <FeatureCards />
      <Features />
      <HowItWorks />
    </main>
  );
}
