import About from "../components/about/about";
import BigCompanies from "../components/about/BigCompanies";
import ContentStatsVideo from "../components/about/ContentStatsVideo";
import MeetOurTeam from "../components/about/MeetOurTeam";
import WorkWithUs from "../components/about/WorkWithUs";

export default function AboutSection() {
  return (
    <div className="w-full h-full items-center mx-auto">
      <About />
      <ContentStatsVideo />
      <MeetOurTeam />
      <BigCompanies />
      <WorkWithUs />
    </div>
  );
}