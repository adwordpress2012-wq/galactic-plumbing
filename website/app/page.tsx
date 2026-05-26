import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustRow } from "@/components/trust-row";
import { WhyChoose } from "@/components/why-choose";
import { RecentWork } from "@/components/recent-work";
import { MicahBooking } from "@/components/micah-booking";
import { HowItWorks } from "@/components/how-it-works";
import { QuoteNote } from "@/components/quote-note";
import { SiteFooter } from "@/components/site-footer";
import { MicahBubble } from "@/components/micah-bubble";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustRow />
        <WhyChoose />
        <RecentWork />
        <MicahBooking />
        <HowItWorks />
        <QuoteNote />
      </main>
      <SiteFooter />
      <MicahBubble />
    </>
  );
}
