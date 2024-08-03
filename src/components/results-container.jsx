import ResultsCard from "./results-card";
import ResultsCard1 from "./results-card1";
import PropTypes from "prop-types";

const ResultsContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-5 max-w-full text-left text-lg text-darkslategray-300 font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[100px] max-w-full">
          200+ results
        </div>
        <div className="flex flex-row items-start justify-start gap-[13px] text-base">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <a className="[text-decoration:none] relative tracking-[0.04em] text-[inherit] inline-block min-w-[49px]">
              Filters
            </a>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/filters.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full text-base lg:flex-wrap">
        <div className="w-[561.9px] flex flex-col items-start justify-start gap-3 min-w-[561.9px] max-w-full lg:flex-1 mq750:min-w-full">
          <ResultsCard
            resultsImage="/results-image@2x.png"
            kingBedStandard="1 king bed standard"
            holidayInnExpre="Holiday Inn Expre..."
            searchFlights="View Details"
          />
          <ResultsCard1
            resultsImage="/results-image-1@2x.png"
            bedInQuad="Bed in Quad"
            freehandLosAngeles="Freehand Los Angeles"
            prop="4.2"
            reviews="(1,941 reviews)"
            s198="$S 198"
            searchFlights="View Details"
          />
          <ResultsCard1
            resultsImage="/results-image-2@2x.png"
            propHeight="190.5px"
            bedInQuad="1 King, City view"
            freehandLosAngeles="The Westin Bonavent..."
            prop="4.1"
            propDisplay="unset"
            propMinWidth="unset"
            reviews="(1,002 reviews)"
            s198="$S 289"
            propHeight1="16px"
            searchFlights="View Details"
          />
          <ResultsCard
            resultsImage="/results-image-3@2x.png"
            propHeight="190.6px"
            kingBedStandard="Deluxe King"
            holidayInnExpre="The Ritz-Carlton, L..."
            propHeight1="16px"
            searchFlights="View Details"
          />
        </div>
        <div className="h-[918.3px] flex-1 relative overflow-hidden min-w-[452px] max-w-full mq750:min-w-full">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/map-1@2x.png"
          />
          <img
            className="absolute top-[81.6px] left-[114.7px] w-[412.4px] h-[502.2px] z-[2]"
            alt=""
            src="/dots-1.svg"
          />
          <img
            className="absolute top-[826.4px] left-[640.3px] w-[37.3px] h-[73.6px] object-cover z-[2]"
            alt=""
            src="/zoom-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

ResultsContainer.propTypes = {
  className: PropTypes.string,
};

export default ResultsContainer;
