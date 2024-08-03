import PropTypes from "prop-types";

const RecCard = ({
  className = "",
  unsplash5MV818tzxeo,
  bali,
  d3N,
  holidayPrice,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-start py-0 px-4 text-left text-xl text-darkslategray-200 font-components-button-large ${className}`}
    >
      <img
        className="self-stretch h-[242px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast border-whitesmoke-200 border-[1px] border-solid flex flex-col items-center justify-center py-[18px] px-[15px]">
        <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[120px]">
            <div className="self-stretch relative tracking-[0.02em] font-medium mq450:text-base">
              {bali}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] text-darkgray">
              {d3N}
            </div>
          </div>
          <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block min-w-[72px] whitespace-nowrap mq1000:text-7xl mq1000:leading-[27px] mq450:text-lgi mq450:leading-[20px]">
            {holidayPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

RecCard.propTypes = {
  className: PropTypes.string,
  unsplash5MV818tzxeo: PropTypes.string,
  bali: PropTypes.string,
  d3N: PropTypes.string,
  holidayPrice: PropTypes.string,
};

export default RecCard;
