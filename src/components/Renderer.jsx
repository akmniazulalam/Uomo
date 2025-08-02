import React, { useState } from "react";
import Countdown from 'react-countdown'

const Renderer = ({ timeString = "0:0:0:0" }) => {
  const [restartKey, setRestartKey] = useState(0);

  const [days = 0, hours = 0, minutes = 0, seconds = 0] = timeString
    .split(":")
    .map(Number);

  const totalMilliseconds =
    ((+days * 24 * 60 * 60) +
     (+hours * 60 * 60) +
     (+minutes * 60) +
     +seconds) * 1000;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setRestartKey((prev) => prev + 1);
      return null;
    }

    const timeUnit = (value, label) => (
      <div className="text-center">
        <p className="text-[30px] font-jost text-menu">
          {String(value).padStart(2, "0")}
        </p>
        <p className="uppercase font-jost font-bold text-base text-footerMenu mt-1">
          {label}
        </p>
      </div>
    );

    return (
      <div className="flex items-end gap-2">
        {timeUnit(days, "Days")}
        <span className="font-jost text-[30px] text-menu pb-[30px]">:</span>
        {timeUnit(hours, "Hours")}
        <span className="font-jost text-[30px] text-menu pb-[30px]">:</span>
        {timeUnit(minutes, "Mins")}
        <span className="font-jost text-[30px] text-menu pb-[30px]">:</span>
        {timeUnit(seconds, "Sec")}
      </div>
    );
  };

  return (
    <Countdown
      key={restartKey}
      date={Date.now() + totalMilliseconds}
      renderer={renderer}
    />
  );
};

export default Renderer;
