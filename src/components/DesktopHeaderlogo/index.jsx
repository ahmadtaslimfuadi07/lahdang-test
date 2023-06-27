import React from "react";

import { Button, Img, Text } from "components";

const DesktopHeaderlogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-auto">
          <Img
            className="h-[62px] md:h-auto object-cover w-[254px]"
            src="images/img_logolandscape1.png"
            alt="logolandscapeOne"
          />
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-[44.94px] h-[100px] md:h-auto items-center justify-center max-w-[694px] px-[12.15px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[100px] md:h-auto items-center justify-center"
            style={{ backgroundImage: "url('images/img_home.svg')" }}
          >
            <Text
              className="sm:text-[20.25px] md:text-[22.25px] text-[24.25px] text-center text-indigo-700_01 w-auto"
              size="txtMontserratRomanMedium2425"
            >
              {props?.selectedpage}
            </Text>
          </div>
          <Button className="bg-transparent cursor-pointer font-medium font-montserrat h-[100px] leading-[normal] py-[34px] sm:text-[20.25px] md:text-[22.25px] text-[24.25px] text-black-900_7f text-center">
            {props?.newseventspage}
          </Button>
          <Button className="bg-transparent cursor-pointer font-medium font-montserrat h-[100px] leading-[normal] py-[33px] sm:text-[20.25px] md:text-[22.25px] text-[24.25px] text-black-900_7f text-center">
            {props?.blogpage}
          </Button>
          <Button className="bg-transparent cursor-pointer font-medium font-montserrat h-[100px] leading-[normal] py-[35px] sm:text-[20.25px] md:text-[22.25px] text-[24.25px] text-black-900_7f text-center">
            {props?.aboutpage}
          </Button>
          <Button className="bg-transparent cursor-pointer font-medium font-montserrat h-[100px] leading-[normal] py-[34px] sm:text-[20.25px] md:text-[22.25px] text-[24.25px] text-black-900_7f text-center">
            {props?.contactpage}
          </Button>
        </div>
      </div>
    </>
  );
};

DesktopHeaderlogo.defaultProps = {
  selectedpage: "Home",
  newseventspage: "News & Events",
  blogpage: "Blog",
  aboutpage: "About",
  contactpage: "Contact",
};

export default DesktopHeaderlogo;
