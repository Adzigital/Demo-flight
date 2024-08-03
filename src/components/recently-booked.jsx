import BookingCard from "./booking-card";
import PropTypes from "prop-types";

const RecentlyBooked = ({ className = "" }) => {
  return (
    <div
      className={`h-[635px] w-[257px] relative rounded-md bg-primary-contrast shrink-0 text-left text-base text-cornflowerblue-300 font-components-button-large lg:hidden ${className}`}
    >
      <b className="absolute top-[0px] left-[0px] tracking-[0.04em] uppercase inline-block w-[257px]">
        Recently booked
      </b>
      <img
        className="absolute top-[33px] left-[0px] w-[257px] h-px"
        alt=""
        src="/vector-2-1.svg"
      />
      <div className="absolute top-[51px] left-[0px] w-full h-[564px] text-xs text-lightslategray font-inter">
        <BookingCard
          airlineLogo="/airlinelogo@2x.png"
          singaporeAirlines="Singapore Airlines"
          price="$1128"
          depCode="SIN"
          depName="Singapore"
          arrCode="LAX"
          arrName="Los Angeles"
          flightClass="Economy"
          numPeople="2 Adults"
          expedia="Expedia"
          timeAgo="1s ago!"
        />
        <BookingCard
          propTop="178px"
          airlineLogo="/airlinelogo1@2x.png"
          singaporeAirlines="American Airlines"
          propMinWidth="100px"
          price="$1024"
          propWidth="50px"
          propMinWidth1="50px"
          propFlex="0.8442"
          depCode="SFO"
          propMinWidth2="33px"
          depName="San Francisco"
          propMinWidth3="80px"
          propFlex1="1"
          arrCode="SIN"
          propMinWidth4="27px"
          arrName="Singapore"
          propMinWidth5="58px"
          propTextAlign="right"
          flightClass="First Class"
          propMinWidth6="60px"
          numPeople="1 Adults"
          propMinWidth7="99px"
          propDisplay="inline-block"
          expedia="Kayak"
          timeAgo="2s ago!"
        />
        <BookingCard
          propTop="356px"
          airlineLogo="/icon-1@2x.png"
          singaporeAirlines="Japan Airlines"
          propMinWidth="81px"
          price="$2996"
          propWidth="unset"
          propMinWidth1="52px"
          propFlex="0.8442"
          depCode="PHX"
          propMinWidth2="34px"
          depName="Phoenix"
          propMinWidth3="46px"
          propFlex1="1"
          arrCode="DXB"
          propMinWidth4="33px"
          arrName="Dubai"
          propMinWidth5="33px"
          propTextAlign="left"
          flightClass="Economy"
          propMinWidth6="53px"
          numPeople="3 Adults"
          propMinWidth7="unset"
          propDisplay="unset"
          expedia="Skyscanner"
          timeAgo="3s ago!"
        />
        <div className="absolute top-[541px] left-[86.5px] leading-[16px] text-cornflowerblue-200 inline-block min-w-[64px]">
          Show more
        </div>
        <img
          className="absolute top-[541px] left-[154.5px] w-4 h-4 overflow-hidden object-contain"
          alt=""
          src="/icon--back@2x.png"
        />
      </div>
    </div>
  );
};

RecentlyBooked.propTypes = {
  className: PropTypes.string,
};

export default RecentlyBooked;
