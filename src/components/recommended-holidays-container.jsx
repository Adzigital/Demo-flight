import RecCard from "./rec-card";
import PropTypes from "prop-types";

const RecommendedHolidaysContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-6 max-w-full text-left text-11xl text-darkslategray-300 font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px]">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[278px] max-w-full mq1000:text-5xl mq450:text-lg">
          Recommended Holidays
        </h2>
        <div className="w-[199.9px] rounded-12xl bg-primary-contrast flex flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
          <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] font-medium text-[inherit]">
            View all holidays
          </a>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/arrowright-2.svg"
          />
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-xl text-darkslategray-200 mq725:grid-cols-[minmax(240px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          holidayPrice="$899"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo1@2x.png"
          bali="Swiss"
          d3N="6D5N"
          holidayPrice="$900"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo2@2x.png"
          bali="Boracay"
          d3N="5D4N"
          holidayPrice="$699"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo3@2x.png"
          bali="Palawan"
          d3N="4D3N"
          holidayPrice="$789"
        />
      </div>
      <div className="w-[199.9px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
        <div className="flex-1 relative tracking-[0.04em] font-medium">
          View all holidays
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/arrowright-2.svg"
        />
      </div>
    </div>
  );
};

RecommendedHolidaysContainer.propTypes = {
  className: PropTypes.string,
};

export default RecommendedHolidaysContainer;
