import React from "react";

import { Img, Line, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Line className="bg-white-A700 h-[106px] md:h-px md:ml-[0] ml-[23px] mr-[1256px] md:mt-0 mt-5 md:w-full w-px" />
        <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between max-w-[1178px] md:mt-0 mx-auto my-[30px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Img
              className="h-16 md:h-auto object-cover w-[59px]"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
          <Text
            className="leading-[32.00px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 uppercase"
            size="txtInterBold30"
          >
            <>
              DR B R AMBEDKAR NATIONAL institute of
              <br /> technology Jalandhar -punjab
            </>
          </Text>
          <Img
            className="sm:flex-1 h-16 md:h-auto object-cover w-[59px] sm:w-full"
            src="images/img_image1.png"
            alt="imageTwo"
          />
        </div>
        <Line className="bg-white-A700 h-[102px] md:h-px md:ml-[0] ml-[1256px] mr-[23px] md:mt-0 mt-6 md:w-full w-px" />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
