import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "./top-header";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-42xl text-primary-contrast font-baloo-bhai ${className}`}
    >
      <TopHeader symbols="/symbols.svg" onSearchTextClick={onSearchTextClick} />
      <div className="self-stretch [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start relative max-w-full">
        <div className="self-stretch w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start py-[167.5px] px-5 box-border gap-[43px] max-w-full z-[2] gap-[21px] mq725:pt-[109px] mq725:pb-[109px] mq725:box-border">
          <div className="w-[1160px] flex flex-col items-start justify-start gap-[5px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-[inherit] mq1000:text-30xl mq1000:leading-[54px] mq450:text-18xl mq450:leading-[40px]">{`Let’s explore & travel the world`}</h1>
            <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-components-button-large mq450:text-lgi mq450:leading-[26px]">
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <div className="w-[1160px] rounded-3xs bg-primary-contrast flex flex-col items-start justify-start pt-[25px] px-5 pb-5 box-border gap-[9px] max-w-full text-left text-xl text-darkslategray-300 font-components-button-large">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[577px] max-w-full mq725:min-w-full">
                  <b className="self-stretch relative tracking-[0.04em] uppercase mq450:text-base">
                    Search flights
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-5 text-base text-darkslategray-400">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                      <input
                        className="cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[48px]">
                        Return
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                      <input
                        className="cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[72.5px]">
                        One-way
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-xs text-text-secondary">
              <div className="flex-1 flex flex-row items-start justify-start p-[5px] box-border gap-2.5 min-w-[615px] max-w-full mq725:min-w-full mq1000:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
                    <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border">
                      <div className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[55px]">
                        Departure
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
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-400 text-left">
                        Singapore (SIN)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
                    <div className="w-[43px] h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border">
                      <div className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[36px]">
                        Arrival
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
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-400 text-left">
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
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
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-gray-400 text-left flex items-center min-w-[150px] p-0"
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
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border">
                <button className="cursor-pointer [border:none] py-[15px] px-2 bg-orange-200 self-stretch rounded overflow-hidden flex flex-col items-center justify-center whitespace-nowrap hover:bg-chocolate">
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

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
