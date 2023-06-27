import React from "react";

const sizeClasses = {
  txtMontserratRomanExtraBold48Indigo700: "font-extrabold font-montserrat",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtMontserratRomanBold16Gray500: "font-bold font-montserrat",
  txtMontserratRomanMedium2425: "font-medium font-montserrat",
  txtMontserratRomanRegular36Black900: "font-montserrat font-normal",
  txtMontserratRomanRegular36: "font-montserrat font-normal",
  txtMontserratItalicRegular1234: "font-montserrat font-normal italic",
  txtMontserratRomanRegular24: "font-montserrat font-normal",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratRomanRegular36Indigo70001: "font-montserrat font-normal",
  txtMontserratRomanLight1234: "font-light font-montserrat",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtMontserratRomanBlack26: "font-black font-montserrat",
  txtMontserratRomanBlack48: "font-black font-montserrat",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanExtraBold48WhiteA700: "font-extrabold font-montserrat",
  txtMontserratRomanExtraBold48Black900: "font-extrabold font-montserrat",
  txtMontserratRomanBold1234: "font-bold font-montserrat",
  txtMontserratRomanExtraBold48: "font-extrabold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
