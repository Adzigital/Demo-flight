import ResultItems1 from "./result-items1";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[310.8px] flex flex-col items-start justify-start gap-[38.6px] shrink-0 text-left text-3xl text-dimgray-300 font-components-button-large lg:hidden gap-[19px] ${className}`}
    >
      <div className="w-[228px] flex flex-col items-start justify-start gap-6 text-xl">
        <div className="w-[219.4px] relative tracking-[0.26px] inline-block mq450:text-base">
          10 out of 177 Results
        </div>
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
      </div>
      <div className="w-[296.6px] flex flex-col items-start justify-start gap-6">
        <h3 className="m-0 relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block min-w-[65.3px] mq450:text-lg">
          Stops
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-mid">
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px] inline-block min-w-[51px]">
              1 Stop
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-4">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px] inline-block min-w-[46px]">
              2 Stops
            </div>
          </div>
        </div>
      </div>
      <ResultItems1
        results="Booking Options"
        results1="Book on Fickleflight"
        results2="Official Airline Websites"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <h3 className="m-0 w-[198px] relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block mq450:text-lg">
          Flight Experience
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-mid">
          <div className="w-[302.5px] flex flex-row items-start justify-start gap-4">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px]">
              No overnight flights
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-4">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px] inline-block min-w-[116px]">
              No long stop-overs
            </div>
          </div>
        </div>
      </div>
      <img className="w-[228px] h-px relative" alt="" src="/vector-21.svg" />
      <ResultItems1
        results="Airlines"
        propWidth="unset"
        propMinWidth="87.8px"
        results1="Singapore Airlines"
        results2="Qatar Airways"
        propDisplay="inline-block"
        propMinWidth1="109px"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
