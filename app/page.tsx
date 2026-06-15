import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MainQuestion from "@/components/MainQuestion";
import Method from "@/components/Method";
import Advisors from "@/components/Advisors";
import ContentPlan from "@/components/ContentPlan";
import AiVerdict from "@/components/AiVerdict";
import OpinionOfDay from "@/components/OpinionOfDay";
import Formats from "@/components/Formats";
import Kpi from "@/components/Kpi";
import FinalConclusion from "@/components/FinalConclusion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <MainQuestion />
        <Method />
        <Advisors />
        <ContentPlan />
        <AiVerdict />
        <OpinionOfDay />
        <Formats />
        <Kpi />
        <FinalConclusion />
      </main>
      <Footer />
    </>
  );
}
