import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Slider = () => {
  const {t} = useTranslation();
  const [item3] = useState([
    { name: "slider_title1", comments: "slider_desc1", img3: "./Content/Frame-1.png" },
    { name: "slider_title2", comments: "slider_desc2", img3: "./Content/Frame-1.png" },
    { name: "slider_title3", comments: "slider_desc3", img3: "./Content/Frame-1.png" },
    { name: "slider_title4", comments: "slider_desc4", img3: "./Content/Frame-1.png" },

  ]);
  return (
    <div dir='rtl' className="h-[400px]">
      <Swiper className='w-full h-full bg-blue-100 dark:bg-zinc-700 '
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {item3.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='slide'>
                <img src={item.img3} alt="image" className='m-auto' />
                <p className='name'> {t(item.name)}</p>
                <p className='desc'>{t(item.comments)}</p>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider