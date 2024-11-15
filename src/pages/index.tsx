import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import Header from "@/components/landing/header";
import VideoSection from "@/components/landing/video-section";
// import ListSection from "@/components/landing/list-section";
import FeatureSection from "@/components/landing/feature-section";
// import CasesSection from "@/components/landing/cases-section";
// import SocialProof from "@/components/landing/social-proof";
// import PricingTable from "@/components/landing/pricing-table";
import { GetStaticPropsResult } from "next";
import { getAllInfluencers, getInfluencerByID } from "@/lib/character-apis";
import {
  Personalities,
  CommingSoon,
} from "@/components/landing/feature-section";

type THomePageProps = {
  influencers: TInfluencer[];
  influencerById: TInfluencer | null;
};

export default function Home({ influencers, influencerById }: THomePageProps) {
  return (
    <Page>
      <NextSeo
        title="SoundCast.ai"
        description="Intelligent Voice with SoundCast.ai"
      />
      <Header characterWithId={influencerById} />
      <main>
        <VideoSection />
        <Personalities featuredCharacters={influencers} />
        <FeatureSection />
        <CommingSoon />
        {/* <ListSection /> */}
        {/* <CasesSection /> */}
        {/* <SocialProof /> */}
        {/* <PricingTable /> */}
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

    const influencerById: TInfluencer | null = await getInfluencerByID("2");

    return {
      props: {
        influencers: featuredInfluencers,
        influencerById,
      },
    };
  } catch (error: unknown) {
    console.error("Error fetching influencers", error);
    return {
      props: {
        influencers: [],
        influencerById: null,
      },
    };
  }
}
