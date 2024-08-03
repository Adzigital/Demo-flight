import Col from "./col";
import PropTypes from "prop-types";

const PlanTripContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-lg text-cornflowerblue-300 font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <b className="w-[1048.6px] relative tracking-[0.04em] uppercase inline-block max-w-full">
          Plan your next trip
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] mt-[-2px] text-11xl text-darkslategray-300">
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[682px] max-w-full mq1000:min-w-full">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] mq1000:text-5xl mq450:text-lg">
              Most Popular Destinations
            </h2>
          </div>
          <div className="w-[231.4px] rounded-12xl bg-primary-contrast flex flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
            <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] font-medium text-[inherit]">
              View all destinations
            </a>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-xl text-primary-contrast mq725:grid-cols-[minmax(240px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <Col
          parisImage="/parisimage@2x.png"
          paris="Paris"
          destinationPrice="$699"
        />
        <Col
          parisImage="/parisimage1@2x.png"
          paris="Greece"
          propMinWidth="51px"
          propWidth="unset"
          destinationPrice="$1079"
          propAlignSelf="unset"
          propMinWidth1="99px"
        />
        <Col
          parisImage="/parisimage2@2x.png"
          paris="Norway"
          propMinWidth="55px"
          propWidth="90.9px"
          destinationPrice="$895"
          propAlignSelf="stretch"
          propMinWidth1="90.9px"
        />
        <Col
          parisImage="/parisimage3@2x.png"
          paris="Tuscany"
          propMinWidth="62px"
          propWidth="100.6px"
          destinationPrice="$1245"
          propAlignSelf="stretch"
          propMinWidth1="100.6px"
        />
      </div>
    </div>
  );
};

PlanTripContainer.propTypes = {
  className: PropTypes.string,
};

export default PlanTripContainer;
