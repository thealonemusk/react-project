import React from "react";

import { Img, Line, Text } from "components";
import Header from "components/Header";

const ContactUspagePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-gray-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between pb-[23px] sm:px-5 px-[23px] w-full">
          <Line className="bg-gray-900 h-[71px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-between max-w-[1138px] md:mt-0 mt-[34px] md:px-5 w-full">
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              Home
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              paper themes
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              speakers
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              committee
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              sponsors
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              awards
            </Text>
            <Text
              className="text-gray-600 text-lg uppercase w-auto"
              size="txtInterBold18"
            >
              registrations
            </Text>
            <a
              href="javascript:"
              className="text-gray-900 text-lg uppercase w-auto"
            >
              <Text size="txtInterBold18Gray900">contact us</Text>
            </a>
          </div>
          <Line className="bg-gray-900 h-[71px] md:h-px md:w-full w-px" />
        </div>
        <div className="bg-white-A700 flex flex-col font-bigshouldersdisplay items-center justify-start p-6 sm:px-5 w-full">
          <div className="border-black-900 border-solid border-x sm:h-[394px] h-[418px] md:h-[789px] max-w-[1232px] mx-auto pb-6 md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start sm:px-5 px-6 w-[508px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="md:text-5xl text-[78px] text-black-900 tracking-[-1.01px] uppercase w-auto"
                      size="txtBigShouldersDisplayBold78"
                    >
                      Contact us
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter gap-[11.97px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase w-auto"
                      size="txtInterBold32"
                    >
                      Naran M. Pindoriya,
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      Associate Professor, Electrical Engineering
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      Indian Institute of Technology Gandhinagar
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      Palaj, Gandhinagar - 382355, Gujarat, India
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      phone no - 999999999
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      email - abc@gmail.com
                    </Text>
                    <Text
                      className="text-black-900 text-lg uppercase w-auto"
                      size="txtInterMedium18"
                    >
                      fAx - 126326352362
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 h-[394px] relative rounded-[21px] w-[36%] md:w-full">
                  <Img
                    className="h-[394px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_6434d82a3cc585a_394x424.png"
                    alt="6434d82a3cc585a"
                  />
                  <Img
                    className="absolute bottom-[0] h-[102px] right-[0]"
                    src="images/img_divcornergraphic.svg"
                    alt="divcornergraphi"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex flex-col font-inter gap-[9px] justify-start right-[0] w-[27%]">
              <Text
                className="md:ml-[0] ml-[9px] sm:text-[17.3px] md:text-[19.3px] text-[21.3px] text-black-900 uppercase w-[199px]"
                size="txtInterMedium213"
              >
                AROUND THE WEB:
              </Text>
              <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                <Img
                  className="h-[42px] w-[42px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[42px] ml-12 w-[42px]"
                  src="images/img_deviconlinkedin.svg"
                  alt="deviconlinkedin"
                />
                <Img
                  className="h-[42px] md:h-auto ml-12 object-cover w-[42px]"
                  src="images/img_image16.png"
                  alt="imageSixteen"
                />
              </div>
            </div>
            <Line className="absolute bg-gray-900 h-px inset-x-[0] mx-auto top-[0] w-full" />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-bigshouldersdisplay items-center justify-start p-6 sm:px-5 w-full">
          <div className="border-black-900 border-solid border-x flex flex-col gap-1 items-center justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1232px] pb-6 w-full">
              <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-[508px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="md:text-5xl text-[78px] text-black-900 tracking-[-1.01px] uppercase w-auto"
                    size="txtBigShouldersDisplayBold78"
                  >
                    Reach to us
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col h-[400px] md:h-auto items-start justify-start rounded-[20px] w-auto md:w-full">
              <Img
                className="h-[400px] sm:h-auto object-cover rounded-[20px] w-[1200px] md:w-full"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUspagePage;
