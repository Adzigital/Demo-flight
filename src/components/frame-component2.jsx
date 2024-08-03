import InputGroup from "./input-group";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-left text-42xl text-primary-contrast font-baloo-bhai mq450:pb-8 mq450:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(100.3deg,_#114f8b,_#2a9bd7)] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start py-[84.5px] px-0 box-border relative max-w-full mq450:pt-[55px] mq450:pb-[55px] mq450:box-border">
          <div className="h-[362px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
          <img
            className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/banner-background@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-20 box-border gap-5 max-w-full z-[2] mq750:pl-10 mq750:pr-10 mq750:box-border">
            <div className="self-stretch flex flex-col items-center justify-start">
              <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-[inherit] mq1050:text-30xl mq1050:leading-[54px] mq450:text-18xl mq450:leading-[40px]">
                Where are you off too?
              </h1>
            </div>
            <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-row flex-wrap items-start justify-start p-5 box-border max-w-full [row-gap:20px] text-xs text-text-secondary font-components-button-large mq1050:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap mq1050:min-w-full mq1050:flex-[unset] mq1050:self-stretch">
                <InputGroup
                  departure="Departure"
                  activePlaceholder="Singapore (SIN)"
                />
                <InputGroup
                  propWidth="43px"
                  departure="Arrival"
                  propMinWidth="36px"
                  activePlaceholder="Los Angeles (LA)"
                />
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
                      <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                        <div className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[26px]">
                          Date
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-2 text-center text-dimgray-200">
                        <div className="hidden flex-row items-start justify-start gap-2">
                          <div className="flex flex-col items-start justify-start">
                            <div className="w-[71px] rounded-2xl bg-gainsboro-200 flex flex-row items-center justify-start p-1 box-border">
                              <div className="w-6 rounded-45xl bg-silver overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-gray-400">
                                <div className="self-stretch relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <div className="w-[71px] rounded-2xl bg-gainsboro-200 flex flex-row items-center justify-start p-1 box-border">
                              <div className="w-6 rounded-45xl bg-silver overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-gray-400">
                                <div className="self-stretch relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <input
                          className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-gray-400 text-left flex items-center min-w-[calc(100%_-_32px)] p-0"
                          placeholder="01/05/2022"
                          type="text"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/date.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border mq1050:self-stretch mq1050:w-auto">
                <button className="cursor-pointer [border:none] py-[15px] px-2 bg-orange-200 self-stretch rounded overflow-hidden flex flex-col items-center justify-center whitespace-nowrap hover:bg-chocolate mq1050:text-center mq1050:self-stretch mq1050:w-auto mq1050:min-w-[164]">
                  <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
