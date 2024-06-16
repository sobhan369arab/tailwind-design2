import screenLightController from "../../Options/darkMood"
import { LANGUAGES } from "../../Languages-Constants"
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HeaderTop = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    if (e.target.value === "fa") {
      document.body.style.direction = "ltr";
    }
    else {
      document.body.style.direction = "rtl";
    }
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  const [items5] = useState([
    { text: "headerTopText4" },{ text: "headerTopText3" }, { text: "headerTopText2" },  { text: "headerTopText1" } 
  ]);

  return (
    <div className="h-[20%] mb-3  md:flex md:justify-between md:flex-row-reverse md:items-center md:pt-0 pt-4  textBasis1    ">
      <div className=" sm:flex sm:items-center  justify-between flex-row-reverse">
        <div className="flex items-center justify-around xl:gap-6 sm:gap-4   cursor-pointer dark:text-zinc-200">
          <div onClick={() => screenLightController()} className="h-4  w-4 md:h-8 md:w-8 bg-[url('./darkMood.png')] dark:bg-[url('./lightMood.png')] bg-cover"> </div>

          <select defaultValue={"fa"} onChange={onChangeLang}>
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <span className="sm:inline hidden">{t("headerTopText6")}</span>
          <span className="sm:inline hidden">{t("headerTopText5")}</span>
          {items5.map((item, index) => (
            <span key={index}> {t(item.text)} </span>
          ))}
          <img src="./logoHeader.png" alt="image" className=" h-6  lg:h-10 md:h-6 cursor-default lg:inline-block hidden" />
        </div>
      </div>
      <div className="bg-Mustard Box1 hidden"> {t("headerTopText7")}</div>
    </div>
  )
}

export default HeaderTop