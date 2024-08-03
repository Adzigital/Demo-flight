import UnstyledButton from "./unstyled-button";
import Footer from "./footer";
import PropTypes from "prop-types";

const SubscriptionContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[754.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[225.7px] box-border max-w-full text-center text-lg text-cornflowerblue-300 font-components-button-large mq725:pb-24 mq725:box-border mq1000:pb-[147px] mq1000:box-border mq450:h-auto ${className}`}
    >
      <div className="self-stretch bg-aliceblue overflow-hidden flex flex-row items-start justify-center pt-[52px] px-0 pb-[42px] box-border relative shrink-0 max-w-full mq725:pt-[34px] mq725:pb-[27px] mq725:box-border">
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[-1px] left-[0px] max-w-full overflow-hidden object-cover"
          alt=""
          src="/subscribe-section-background@2x.png"
        />
        <div className="w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              subscribe to our newsletter
            </b>
            <h2 className="m-0 self-stretch relative text-11xl font-bold font-[inherit] text-darkslategray-100 mq1000:text-5xl mq450:text-lg">
              Get weekly updates
            </h2>
          </div>
          <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-primary-contrast border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[26px] px-[29px] gap-[17px] max-w-full text-left text-slategray">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[34px]">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-center text-xs text-dimgray-200">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid box-border flex flex-col items-start justify-start py-0 px-[11px] max-w-full">
                  <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-4 px-0 box-border gap-2 max-w-full">
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
                      className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-text-secondary text-left flex items-center min-w-[255px] max-w-full p-0"
                      placeholder="Your name"
                      type="text"
                    />
                    <div className="h-7 w-7 relative hidden">
                      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start w-full h-full">
                        <div className="w-7 h-7 rounded-29xl flex flex-row items-center justify-start p-1 box-border">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded border-other-outlined-border border-[1px] border-solid box-border flex flex-col items-start justify-start py-0 px-[11px] max-w-full">
                  <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-4 px-0 box-border gap-2 max-w-full">
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
                      className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-text-secondary text-left flex items-center min-w-[255px] max-w-full p-0"
                      placeholder="Email address"
                      type="text"
                    />
                    <div className="h-7 w-7 relative hidden">
                      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start w-full h-full">
                        <div className="w-7 h-7 rounded-29xl flex flex-row items-center justify-start p-1 box-border">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[7px] px-[31px] bg-orange-200 w-[164px] rounded overflow-hidden flex flex-col items-center justify-center box-border hover:bg-darkorange">
              <UnstyledButton />
            </button>
          </div>
        </div>
      </div>
      <Footer logo="/logo.svg" />
    </section>
  );
};

SubscriptionContainer.propTypes = {
  className: PropTypes.string,
};

export default SubscriptionContainer;
