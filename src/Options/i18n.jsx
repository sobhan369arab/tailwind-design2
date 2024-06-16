import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
//   .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "fa",
    // lng: getCurrentLang(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fa: {
        translation: {
          //headerTop
          headerTopText1: "خانه",headerTopText2: "دوره ",headerTopText3: "ویژگی ها",headerTopText4: "نظرات",headerTopText5: "سوالات متداول",headerTopText6: "تماس با ما ",headerTopText7: "دانلود اپلیکیشن",
          //headerDown
          headerDownText1: "اسکیلاپ !",headerDownText2: "بهترین پلتفرم برای آموزش  ",headerDownText25: " ویادگیری",headerDownText3: "شروع کنید!",headerDownText4: "مشاهده دوره ها",headerDownText5: "1000 دانشجو ما را تایید و تاکید کرده اند",
          //Content1Top
          SectionTopText1:"دوره هایی که جایی پیدا نمیشه",SectionTopText2:"تغذیه مناسب",SectionTopText3:"شیمی",SectionTopText4:"مراقب دندان",SectionTopText5:"مراقبت از حیوانات",SectionTopText6:"زیبایی و سلامت",SectionTopText7:"نگهداری از گیاهان",SectionTopText8:"استایل و فشن",SectionTopText9:"سینما اکت",
          //Content1Down
          SectionDownText1:"پرداخت اقساطی",SectionDownText11:"مقرون به صرفه بودن قیمت ها",SectionDownText2:"دوره های با کیفیت",SectionDownText22:"بهترین اساتید و مدرسین",SectionDownText3:"تماما آنلاین",SectionDownText33:"همه روزه و 24ساعته ببینید",SectionDownText4:"صرفه جویی در زمان",SectionDownText44:"روی خودتان به درستی سرمایه گذاری کنید",
          //Slider
          slider_title1:"کامیار منصوری",slider_desc1:"دوره ها با کیفیت و پیشرفته بودند. این دوره ها را در هیچ کجا نخواهید یافت.",slider_title2:"علیرضا محمدی",slider_desc2:"دوره ها با هزینه مناسبی هستند و نسبت به محتوا واقعا مقرون به صرفه است.",slider_title3:"ندا سلیمانی",slider_desc3:"پشتیبانی دوره ها به صورت کامل و جامع صورت میگیره و هر مشکلی در روند دوره ایجاد بشه سریعا پاسخ داده میشه",slider_title4:"امیر جعفری",slider_desc4:"تنوع دوره ها در هر زمینه بسیار زیاده و افراد مختلف میتوانند از دوره ها بهره مند شوند",
         //Content2Top
          PartTop_text:"مهارت های خود را افزایش دهید",PartTop_title1:"کاتالوگ دوره های متنوع:",PartTop_desc1:" مجموعه‌ای از دوره‌های گسترده از موضوعات و صنایع مختلف ارائه می‌دهد، تضمین می‌کند که شما می‌توانید دوره مناسبی را برای دستیابی به اهداف یادگیری خود پیدا کنید.",
          PartTop_title2:"مدرسان ماهر:",PartTop_desc2:"تمام دوره‌ها توسط متخصصان صنعت و حرفه‌ای‌های با تجربه تدریس می‌شوند، به شما دانش عملی و راهنمایی‌های ارزشمندی ارائه می‌دهند.",
          PartTop_title3:"یادگیری انعطاف پذیر: ",PartTop_desc3:"شما می‌توانید به دوره‌ها از هر مکان و زمانی دسترسی داشته باشید، که این امکان را فراهم می‌کند که یادگیری را به برنامه‌ی زمانی خود تنظیم کنید.",
         //Accardion
          AccarHeading1:"مدت زمان دوره ها چقدر است؟",AccarHeading2:"آیا شما پس از اتمام دوره گواهی‌نامه ارائه می‌دهید؟",AccarHeading3:"آیا پس از خرید، پشتیبانی پس از خرید برای دوره موجود است؟",AccarHeading4:"مدت زمان دوره ها چقدر است؟",
          AccarContent1:"مدت زمان دوره ها بین شش تا هفت هفته است .",AccarContent2:"در پایان دوره، با کسب نمره مناسب در آزمون نهایی و درخواست گواهی، شما یک گواهی معتبر از یک سازمان حرفه‌ای و فنی به دست خواهید آورد.",
          AccarContent3:"بله پشتیبانی مجموعه تا شش ماه پس از خرید دوره توسط عوامل مجموعه انجام می شود",AccarContent4:"قطعاٌ این دوره برای شما کاربردی و نتیجه به همراه خواهد داشت اما اگر اینطور نبود تا یک ماه امکان عودت وجه وجود دارد",
         //Footer
          FooterText1:"اطلاعات بیشتری لازم دارید؟ ",FooterText2:"امروز با ما ارتباط برقرار کنید. متخصصان متعهد ما در اینجا هستند تا به شما پشتیبانی استثنایی و پاسخ‌های سریع را ارائه دهند. ",FooterText3:"ما را در شبکه های اجتماعی دنبال کنید |",FooterText4:"ارتباط با پشتیبان",
        },
      },
      en: {
        translation: {
          //headerTop
          headerTopText1: "Home",headerTopText2: "Courses ",headerTopText3: " Features",headerTopText4: "testimonials",headerTopText5: " FAQ",headerTopText6: "Contact",headerTopText7: " Download Application",
          //headerDown
          headerDownText1: "SKILLUP!",headerDownText2: "PLATFORM FOR", headerDownText25:"SKILL AND LEARNING",headerDownText3: "Start Learning!",headerDownText4: "Explore Courses",headerDownText5: "+100K Students like skillup",
          //Content1Top
          SectionTopText1:"Explore Topics with Precision",SectionTopText2:"Optimal Nutrition",SectionTopText3:"chemistry",SectionTopText4:"Dental Care",SectionTopText5:"Animal Welfare",SectionTopText6:"Beauty And Health",SectionTopText7:"Maintenance Of Plants",SectionTopText8:"Style And Fashion",SectionTopText9:"Cinema Act",
          //Content1Down
          SectionDownText1:"Easy Payment",SectionDownText11:"Affordability at Your Fingertips",SectionDownText2:"Quality Courses",SectionDownText22:"Unparalleled Course Quality",SectionDownText3:"All Online",SectionDownText33:"Seamless Savings in Time",SectionDownText4:"Time-Saving",SectionDownText44:"A Smart Investment in Your Future",
          //Slider
          slider_title1:"Jack Mayer",slider_desc1:"The courses were of high quality and advanced. You will not find these courses anywhere else.",slider_title2:"David Janson",slider_desc2:"The courses are reasonably priced and the content is really affordable.",slider_title3:"Ana Henderson",slider_desc3:"Courses are fully and comprehensively supported, and any problems that arise during the course will be answered immediately",slider_title4:"Jordan Cox",slider_desc4:"The variety of courses in each field is very large and different people can benefit from the courses",
          //Content2Top
          PartTop_text:"Increase your skills",PartTop_title1:"Catalog of various courses:",PartTop_desc1:"It offers a wide range of courses from different subjects and industries, ensuring that you can find the right course to meet your learning goals.",
          PartTop_title2:"Skilled instructors:",PartTop_desc2:"All courses are taught by industry experts and experienced professionals, providing you with practical knowledge and valuable guidance.",
          PartTop_title3:"Flexible learning:",PartTop_desc3:"You can access sessions from anywhere and anytime, allowing you to set yourself up on a schedule.",
         //Accardion
          AccarHeading1:"How long is the course?",AccarHeading2:"Do you provide a certificate upon completion of the course?",AccarHeading3:"Is post-purchase support available for the course after purchase?",AccarHeading4:"If the course is not practical, do you give a refund?",
          AccarContent1:"The duration of the courses is between six and seven weeks.",AccarContent2:"At the end of the course, you will receive a valid certificate from a professional and technical organization by obtaining a suitable score in the final exam and applying for a certificate.",
          AccarContent3:"Yes, collection support is provided by collection agents up to six months after purchasing the course",AccarContent4:"Definitely, this course will be useful for you and bring results, but if not, there is a possibility of returning the money within a month.",
         //Footer
         FooterText1:"Do you need more information?",FooterText2:"Contact us today. Our dedicated professionals are here to provide you with exceptional support and prompt responses.",FooterText3:"Follow us on social networks",FooterText4:"Communication with support",
        },
      },
    },
  });

export default i18n;
