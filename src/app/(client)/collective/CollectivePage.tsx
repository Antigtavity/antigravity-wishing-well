"use client";

import Leaderboard from "@/components/Collective/Leaderboard";
import CollectiveHero from "@/components/Collective/CollectiveHero";
import Event from "@/components/Collective/Event";
import CollectiveRotatingCarousel from "@/components/Collective/CollectiveRotatingCarousel";
import Youtube from "@/components/Collective/Youtube";
import PointsAndMultiplierInfo from "@/components/Collective/PointsAndMultiplierInfo";
import RankupAndRewardsInfo from "@/components/Collective/RankupAndRewardsInfo";
import Team from "@/components/Collective/Team";
import PromotionAndNewsletter from "@/components/Collective/PromotionAndNewsletter";
import Footer from "@/components/Footer";

export default function CollectivePage() {
  return (
    <>
      <CollectiveHero />
      <div className="md:h-[50vh] max-h-[500px] 3xl:max-h-[100px]" />
      <div className="block md:hidden">
        <Leaderboard />
      </div>
      <Event />
      <CollectiveRotatingCarousel />
      <Youtube />
      <PointsAndMultiplierInfo />
      <RankupAndRewardsInfo />
      <Team />
      <PromotionAndNewsletter />
      <Footer />
    </>
  );
}
