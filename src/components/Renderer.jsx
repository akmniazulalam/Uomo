

const Renderer = ({ days, hours, minutes, seconds }) => {
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

export default Renderer;
