import FlightMainContainer from "./flight-main-container";
import PropTypes from "prop-types";

const RecentFlightsContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-9 max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large gap-[18px] ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] max-w-full">
        <FlightMainContainer
          sIN="SIN"
          duration="/duration.svg"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <FlightMainContainer
          sIN="MY"
          propHeight="24px"
          duration="/duration.svg"
          lAX="DUB"
          propMinWidth="51.3px"
          propAlignSelf="unset"
          propWidth="403px"
          propWidth1="218px"
          propDisplay="inline-block"
          departOn="Depart on:"
          sep2021=" 9 Sep 2021"
        />
      </div>
      <div className="self-stretch relative text-lg tracking-[0.04em] uppercase text-lightgray">
        Prepare for your trip
      </div>
    </div>
  );
};

RecentFlightsContainer.propTypes = {
  className: PropTypes.string,
};

export default RecentFlightsContainer;
