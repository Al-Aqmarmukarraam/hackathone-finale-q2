import React from "react";
import Tailored from "../components/team/tailored";
import MeetOurTeam from "../components/about/MeetOurTeam";
import FreeTrials from "../components/team/freeTrials";

export default function Team() {
  return (
    <div className="w-full">
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}