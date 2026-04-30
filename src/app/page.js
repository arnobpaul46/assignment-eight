import Hero from "@/component/Hero";
import LearningTips from "@/component/LearningTips";
import PopularCourse from "@/component/PopularCourse";
import TrendingCourse from "@/component/TrendingCourse";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCourse />
      <TrendingCourse/>
      <LearningTips/>
      
    </>
  );
}