import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import Header from "@/components/landing/header";
import VideoSection from "@/components/landing/video-section";
import ListSection from "@/components/landing/list-section";
import FeatureSection, {
  Personalities,
} from "@/components/landing/feature-section";
// import CasesSection from "@/components/landing/cases-section";
import SocialProof from "@/components/landing/social-proof";
import PricingTable from "@/components/landing/pricing-table";
import { GetStaticPropsResult } from "next";
import { getAllInfluencers } from "@/lib/character-apis";

type THomePageProps = {
  influencers: TInfluencer[];
};

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
        <Personalities />
        {/* <CasesSection /> */}
        <SocialProof />
        <PricingTable />
      </main>
    </Page>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<THomePageProps>
> {
  try {
    const influencers: TInfluencer[] = await getAllInfluencers();

    const featuredInfluencers = influencers.filter(
      (influencer) => influencer.featured
    );

    return {
      props: {
        influencers: featuredInfluencers,
      },
    };
  } catch (error) {
    console.error("Error fetching influencers", error);
    return {
      props: {
        influencers: [],
      },
    };
  }
}
