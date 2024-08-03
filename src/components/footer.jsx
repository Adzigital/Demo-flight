import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  logo,
  propPadding,
  propTextDecoration,
  propTextDecoration1,
  propPadding1,
  propTextDecoration2,
  propTextDecoration3,
  propPadding2,
  propTextDecoration4,
}) => {
  const companyStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const careersStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const supportStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const accountStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  const fAQStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration3,
    };
  }, [propTextDecoration3]);

  const moreStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const quarantineRulesStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration4,
    };
  }, [propTextDecoration4]);

  return (
    <footer
      className={`self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row flex-wrap items-start justify-center py-[33px] px-[84px] box-border gap-[43.5px] shrink-0 max-w-full text-left text-lg text-primary-contrast font-components-button-large gap-[22px] mq725:pl-[42px] mq725:pr-[42px] mq725:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[385px] max-w-full shrink-0 mq725:min-w-full">
        <img
          className="w-[174px] h-[33px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="self-stretch relative leading-[27px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className="flex flex-row items-start justify-start gap-5">
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
            loading="lazy"
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
            loading="lazy"
            alt=""
            src="/entyposocialinstagramwithcircle.svg"
          />
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
            loading="lazy"
            alt=""
            src="/entyposocialtwitterwithcircle.svg"
          />
        </div>
      </div>
      <div className="h-[157.9px] w-px relative border-gray-500 border-r-[1px] border-solid box-border mq1050:w-full mq1050:h-px" />
      <div className="flex-1 flex flex-row items-start justify-start min-w-[385px] max-w-full text-xl mq725:min-w-full">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full mq725:flex-wrap">
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={companyStyle}
          >
            <div className="w-[174.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              Company
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <div
                className="w-[135.7px] relative inline-block"
                style={aboutUsStyle}
              >
                About Us
              </div>
              <div className="w-[84.3px] relative inline-block">News</div>
              <div
                className="w-[115.1px] relative inline-block"
                style={careersStyle}
              >
                Careers
              </div>
              <div className="self-stretch relative">How we work</div>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={supportStyle}
          >
            <div className="w-[131.6px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              Support
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <div
                className="w-[109.6px] relative inline-block"
                style={accountStyle}
              >
                Account
              </div>
              <div className="self-stretch relative">Support Center</div>
              <div className="w-[53px] relative inline-block" style={fAQStyle}>
                FAQ
              </div>
              <div className="w-[164.4px] relative inline-block">
                Accessibility
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={moreStyle}
          >
            <div className="w-[76.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              More
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <div className="w-[172.9px] relative inline-block">
                Covid Advisory
              </div>
              <div className="w-[135.4px] relative inline-block">
                Airline Fees
              </div>
              <div className="w-[50.6px] relative inline-block">Tips</div>
              <div
                className="self-stretch relative"
                style={quarantineRulesStyle}
              >
                Quarantine Rules
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propPadding1: PropTypes.any,
  propTextDecoration2: PropTypes.any,
  propTextDecoration3: PropTypes.any,
  propPadding2: PropTypes.any,
  propTextDecoration4: PropTypes.any,
};

export default Footer;
