import type { JourneyStageId } from "./business-journey.types";
import { ExpansionVisual } from "./stage-visuals/ExpansionVisual";
import { GrowthVisual } from "./stage-visuals/GrowthVisual";
import { IdeaVisual } from "./stage-visuals/IdeaVisual";
import { LaunchVisual } from "./stage-visuals/LaunchVisual";
import { RunningVisual } from "./stage-visuals/RunningVisual";

type JourneyStageVisualProps = {
  stageId: JourneyStageId;
};

export function JourneyStageVisual({
  stageId,
}: JourneyStageVisualProps) {
  switch (stageId) {
    case "idea":
      return <IdeaVisual />;

    case "launch":
      return <LaunchVisual />;

    case "running":
      return <RunningVisual />;

    case "growth":
      return <GrowthVisual />;

    case "expansion":
      return <ExpansionVisual />;
  }
}
