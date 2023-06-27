import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";
import DesktopHeaderlogo from "components/DesktopHeaderlogo";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[31px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="md:px-5 relative w-full">
          <div className="h-[1500px] mx-auto pb-3.5 md:pl-10 pl-20 sm:pl-5 pt-[46px] w-[1440px] md:w-full">
            <Img
              className="md:h-[901px] h-full max-w-[1440px] mx-auto object-cover w-[1440px] md:w-full"
              src="defaultNoData.png"
              alt="createfromframe"
            />
            <div className="absolute inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-[1500px] inset-[0] justify-center m-auto object-cover w-[1440px] md:w-full"
                src="images/img_holdingsamsung.png"
                alt="holdingsamsung"
              />
              <div className="flex flex-col gap-2.5 items-start justify-center ml-20 mt-[336px] pt-[33px] relative w-full">
                <div className="flex flex-col gap-1 items-start justify-center w-[562px] sm:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 uppercase w-full"
                    size="txtMontserratRomanBlack26"
                  >
                    b2b dan marketplace
                  </Text>
                  <Text
                    className="leading-[87.90%] max-w-[562px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 uppercase"
                    size="txtMontserratRomanBlack48"
                  >
                    Barang rusak dan tidak terpakai
                  </Text>
                </div>
                <Img
                  className="h-[105px] md:h-auto object-cover w-[270px] sm:w-full"
                  src="images/img_playstoreicon.png"
                  alt="playstoreicon"
                />
              </div>
              <div className="bg-indigo-600 flex flex-row h-[534px] md:h-auto items-center justify-center max-w-[1440px] mb-[65px] mt-auto mx-auto pb-12 pt-[31px] md:px-10 px-20 sm:px-5 relative rounded-tl-[25px] rounded-tr-[25px] w-full">
                <div className="flex md:flex-col flex-row gap-[26px] items-center justify-start w-full">
                  <Text
                    className="flex-1 sm:flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-[48%] sm:w-full"
                    size="txtMontserratRomanRegular36"
                  >
                    Ayo manfaatkan potensi nilai dan penghasilan tambahan dari
                    barang elektronik yang tidak terpakai atau rusak di Lahdang!
                  </Text>
                  <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-center w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-7 items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-full">
                            <Img
                              className="h-[139px] md:h-auto object-cover"
                              src="images/img_ticker2.png"
                              alt="tickerTwo"
                            />
                            <Img
                              className="h-[139px] md:h-auto object-cover"
                              src="images/img_ticker31.png"
                              alt="tickerThirtyOne"
                            />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-full">
                            <Img
                              className="h-[139px] md:h-auto mb-0.5 object-cover"
                              src="images/img_ticker1.png"
                              alt="tickerOne"
                            />
                            <Img
                              className="h-[139px] md:h-auto sm:mt-0 mt-0.5 object-cover"
                              src="images/img_ticker6.png"
                              alt="tickerSix"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gray-100 cursor-pointer font-bold leading-[normal] min-w-[652px] md:min-w-full py-2.5 rounded-lg shadow-bs1 text-center text-indigo-700 text-xl uppercase">
                      Dan lain-lain
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[499px] md:h-auto items-center justify-start max-w-[1440px] mb-[627px] mt-auto mx-auto pb-[73px] pt-[31px] md:px-10 px-20 sm:px-5 w-full">
            <div className="flex flex-col gap-[17px] items-start justify-end w-[558px] sm:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-700_01 uppercase"
                size="txtMontserratRomanExtraBold48"
              >
                <>
                  Fitur
                  <br />
                  Jual beli
                </>
              </Text>
              <Text
                className="max-w-[558px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-indigo-700_01"
                size="txtMontserratRomanRegular36Indigo70001"
              >
                Transaksi di Lahdang dijamin mudah, aman dan nyaman
              </Text>
            </div>
          </div>
          <div className="h-[1194px] md:h-auto mt-auto mx-auto pb-[31px] md:px-10 px-20 sm:px-5 w-[1440px] md:w-full">
            <div className="mt-auto mx-auto w-full">
              <div className="h-[658px] mt-auto mx-auto w-full">
                <div className="bg-indigo-700_01 h-[658px] m-auto w-full"></div>
                <div className="absolute flex flex-col gap-[17px] h-full items-start justify-center right-[6%] top-[0] w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 uppercase"
                    size="txtMontserratRomanExtraBold48WhiteA700"
                  >
                    <>
                      Fitur
                      <br />
                      permintaan rekanan
                    </>
                  </Text>
                  <Text
                    className="max-w-[515px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratRomanRegular36"
                  >
                    Transaksi di Lahdang dijamin mudah, aman dan nyaman
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[451px] inset-y-[0] left-[1%] my-auto object-cover w-[830px]"
                src="images/img_iphone12pro.png"
                alt="iphone12pro"
              />
            </div>
            <Img
              className="absolute h-[702px] object-cover right-[7%] top-[0] w-[885px]"
              src="images/img_iphone13.png"
              alt="iphoneThirteen"
            />
          </div>
          <header className="absolute flex inset-x-[0] items-center justify-center mx-auto p-2.5 rounded-bl-[50px] rounded-br-[50px] top-[0] w-full">
            <DesktopHeaderlogo className="bg-white-A700 flex md:flex-col flex-row gap-[20.52px] h-[100px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 px-20 sm:px-5 rounded-bl-[50px] rounded-br-[50px] shadow-bs w-full" />
          </header>
        </div>
        <div className="bg-amber-500 flex md:flex-col flex-row md:gap-10 h-[544px] md:h-auto items-center justify-between md:px-10 px-20 sm:px-5 py-[122px] w-full">
          <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start w-[510px] sm:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 uppercase"
              size="txtMontserratRomanExtraBold48Black900"
            >
              <>
                Fitur
                <br />
                index
              </>
            </Text>
            <Text
              className="max-w-[510px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratRomanRegular36Black900"
            >
              Di Lahdang, Kamu dapat memperoleh informasi harga terkini untuk
              barang limbah di pasar.
            </Text>
          </div>
          <Img
            className="md:flex-1 h-[381px] sm:h-auto object-cover rounded-[27px] w-[612px] md:w-full"
            src="images/img_layer52copy1.png"
            alt="layer52copyOne"
          />
        </div>
        <div className="flex flex-col items-center justify-center py-[31px] w-full">
          <Img
            className="h-[638px] md:h-auto max-w-[1036px] mx-auto object-cover w-full"
            src="images/img_image3.png"
            alt="imageThree"
          />
        </div>
        <div className="flex flex-col gap-[33px] items-center justify-center pb-[43px] pt-[19px] w-full">
          <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo-700 uppercase w-auto"
              size="txtMontserratRomanExtraBold48Indigo700"
            >
              bagaimana kata komunitas ?
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start pl-[187px] md:px-5 w-[47%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-100_01 flex flex-col gap-[11px] items-center justify-start sm:ml-[0] p-2.5 rounded-[10px] shadow-bs2 w-auto">
                <div className="bg-indigo-600 flex flex-col h-[81px] items-center justify-start rounded-[40px] w-[81px]">
                  <Img
                    className="h-[81px] md:h-auto rounded-[50%] w-[81px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[12.34px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanBold1234"
                    >
                      DONNY S
                    </Text>
                    <Text
                      className="text-[12.34px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanLight1234"
                    >
                      Jakarta
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center w-[47%] md:w-full">
                    <RatingBar
                      className="flex justify-between w-[123px]"
                      value={4}
                      starCount={5}
                      color="#d4d4d4"
                      activeColor="#f1c644"
                      size={17}
                    ></RatingBar>
                  </div>
                  <Text
                    className="italic text-[12.34px] text-black-900 text-center w-full"
                    size="txtMontserratItalicRegular1234"
                  >
                    “Kemaren harus rutin cek grup facebook untuk cek ada
                    penawaran yang cocok atau engga, sekarang cuma satu aplikasi
                    aja taro penawaran dan deal langsung. bener-bener ga ribet,
                    mantap lahdang”
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100_01 flex flex-col gap-[11px] items-center justify-start sm:ml-[0] p-2.5 rounded-[10px] shadow-bs2 w-auto">
                <div className="bg-indigo-600 flex flex-col items-center justify-start rounded-[38px] w-[49%] md:w-full">
                  <Img
                    className="h-[81px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] rounded-tl-[38px] rounded-tr-[38px] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-[12.34px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanBold1234"
                    >
                      DONNY S
                    </Text>
                    <Text
                      className="text-[12.34px] text-black-900 text-center w-auto"
                      size="txtMontserratRomanLight1234"
                    >
                      Jakarta
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-end md:ml-[0] ml-[70px] w-[58%] md:w-full">
                    <RatingBar
                      className="flex justify-between w-[97px]"
                      value={4}
                      starCount={5}
                      color="#d4d4d4"
                      activeColor="#f1c644"
                      size={17}
                    ></RatingBar>
                  </div>
                  <Text
                    className="italic text-[12.34px] text-black-900 text-center w-full"
                    size="txtMontserratItalicRegular1234"
                  >
                    “Kemaren harus rutin cek grup facebook untuk cek ada
                    penawaran yang cocok atau engga, sekarang cuma satu aplikasi
                    aja taro penawaran dan deal langsung. bener-bener ga ribet,
                    mantap lahdang”
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-indigo-700_01 flex flex-col gap-[18px] h-[482px] md:h-auto items-center justify-center p-[30px] sm:px-5 w-full">
          <div className="flex flex-col gap-1 items-center justify-center max-w-[1380px] mx-auto md:px-5 w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 uppercase w-full"
              size="txtMontserratRomanExtraBold48WhiteA700"
            >
              punya pertanyaan ?
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
              size="txtMontserratRomanRegular24"
            >
              Cek pertanyaan yang sering diajukan berikut ini :
            </Text>
          </div>
          <List
            className="flex flex-col gap-[18px] items-center max-w-[1082px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col h-[60px] md:h-auto items-start justify-center max-w-[1082px] w-full">
              <div className="bg-indigo-600 flex flex-col h-[42px] md:h-auto items-center justify-start rounded-[15px] w-full">
                <div className="bg-black-900 flex flex-col items-center justify-start p-2.5 rounded-[15px] w-full">
                  <Text
                    className="text-center text-gray-100_01 text-xl w-auto"
                    size="txtMontserratRomanBold20"
                  >
                    Bagaimana cara bertransaksi di Lahdang ?
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[60px] md:h-auto items-start justify-center max-w-[1082px] w-full">
              <div className="bg-indigo-600 flex flex-col h-[42px] md:h-auto items-start justify-start rounded-[15px] w-full">
                <div className="bg-black-900 flex flex-col items-center justify-start p-2.5 rounded-[15px] w-full">
                  <Text
                    className="text-center text-gray-100_01 text-xl w-auto"
                    size="txtMontserratRomanBold20"
                  >
                    Apakah transaksi di Lahdang aman ?
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-[60px] md:h-auto items-center justify-center max-w-[1082px] w-full">
              <div className="bg-indigo-600 flex flex-col h-[42px] md:h-auto items-center justify-start rounded-[15px] w-full">
                <div className="bg-black-900 flex flex-col items-center justify-start p-2.5 rounded-[15px] w-full">
                  <Text
                    className="text-center text-gray-100_01 text-xl w-auto"
                    size="txtMontserratRomanBold20"
                  >
                    Apakah Lahdang bisa pakai kurir umum ?
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-gray-900 flex flex-col h-[260px] md:h-auto items-center justify-center pt-[22px] w-full">
          <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between md:px-10 px-20 sm:px-5 w-full">
            <div className="flex flex-col gap-3.5 items-start justify-center w-auto">
              <Img
                className="h-[63px] md:h-auto object-cover w-[248px] sm:w-full"
                src="images/img_logolandscape1.png"
                alt="logolandscapeOne_One"
              />
              <Img
                className="h-[105px] md:h-auto object-cover w-[268px] sm:w-full"
                src="images/img_playstoreicon.png"
                alt="playstoreicon_One"
              />
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center pr-[3px] w-[42%] md:w-full">
              <Img
                className="h-[94px] sm:mt-0 mt-0.5"
                src="images/img_facebook.svg"
                alt="facebook"
              />
              <Img
                className="h-[94px] sm:ml-[0] ml-[15px] sm:mt-0 mt-0.5"
                src="images/img_instagram.svg"
                alt="instagram"
              />
              <Img
                className="h-[94px] sm:ml-[0] ml-[15px] sm:mt-0 mt-0.5"
                src="images/img_twitter.svg"
                alt="twitter"
              />
              <Img
                className="h-[94px] mb-0.5 ml-4 sm:ml-[0]"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
              <Img
                className="h-[94px] sm:ml-[0] ml-[15px] sm:mt-0 mt-0.5"
                src="images/img_mail.svg"
                alt="mail"
              />
            </div>
          </div>
        </div>
        <footer className="bg-black-900 flex items-center justify-center pb-[27px] pt-10 px-20 md:px-5 w-full">
          <div className="flex flex-col gap-[34px] items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <a
                  href="javascript:"
                  className="text-base text-white-A700 w-auto"
                >
                  <Text size="txtMontserratRomanBold16">Support</Text>
                </a>
                <ul className="flex flex-col gap-[9px] items-start justify-center w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMontserratRomanMedium16">Help Center</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMontserratRomanMedium16">
                        Support Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-white-A700"
                    >
                      <Text size="txtMontserratRomanMedium15">FAQ</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanBold16"
                >
                  Pages
                </Text>
                <ul className="flex flex-col gap-[9px] items-start justify-center w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMontserratRomanMedium16">
                        News & Event
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMontserratRomanMedium16">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMontserratRomanMedium16">Community</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratRomanBold16"
                >
                  Resources
                </Text>
                <div className="flex flex-col gap-[9px] items-start justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-auto"
                  >
                    <Text size="txtMontserratRomanMedium16">
                      Privacy Policy
                    </Text>
                  </a>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtMontserratRomanMedium16"
                  >
                    Term and Condition
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="text-base text-center text-gray-500 w-full"
              size="txtMontserratRomanBold16Gray500"
            >
              © Lahdang, All rights reserved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopPage;
