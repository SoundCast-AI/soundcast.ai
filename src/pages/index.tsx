import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import Header from "@/components/landing/header";
import VideoSection from "@/components/landing/video-section";
import ListSection from "@/components/landing/list-section";
import FeatureSection from "@/components/landing/feature-section";
import CasesSection from "@/components/landing/cases-section";
import SocialProof from "@/components/landing/social-proof";
import PricingTable from "@/components/landing/pricing-table";

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="SoundCast.ai"
        description="Intelligent Voice with SoundCast.ai"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
    </Page>
  );
}
