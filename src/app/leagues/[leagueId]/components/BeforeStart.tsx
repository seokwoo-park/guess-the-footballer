import { Button } from "@/components/ui/button";
import { GameStatusType } from "@/shared/types";
import React from "react";

type Props = {
  statusHandler: (statusToBeChanged: GameStatusType) => void;
};

const BeforeStart = ({ statusHandler }: Props) => {
  return (
    <div>
      <Button onClick={() => statusHandler("start")}>Start</Button>
    </div>
  );
};

export default BeforeStart;
