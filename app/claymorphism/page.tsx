import ClayHero from "@/components/clay/Hero";
import ClayFeatures from "@/components/clay/Features";
import ClayHowItWorks from "@/components/clay/HowItWorks";
import ClayCTA from "@/components/clay/CTA";
import ClayFooter from "@/components/clay/Footer";

export const metadata = {
  title: "DealerInbound | Claymorphism Design",
  description: "AI-powered call handling for dealerships - Claymorphism theme",
};

export default function ClaymorphismPage() {
  return (
    <main>
      <ClayHero />
      <ClayFeatures />
      <ClayHowItWorks />
      <ClayCTA />
      <ClayFooter />
    </main>
  );
}
