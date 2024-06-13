import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Slider = ()=>{
return(
    <div className="h-96"> 
        <Swiper className='w-full h-full bg-blue-100' 
    modules={[Navigation, Pagination,A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='slide'>
            <img src="./Content/Frame-1.png" alt="image" className='m-auto' />
            <p className='name'> کامیار منصوری</p>
            <p className='desc'>دوره ها با کیفیت و پیشرفته بودند. این دوره ها را در هیچ کجا نخواهید یافت</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src="./Content/Frame-1.png" alt="image" className='m-auto' />
            <p className='name'> کامیار منصوری</p>
            <p className='desc'>دوره ها با کیفیت و پیشرفته بودند. این دوره ها را در هیچ کجا نخواهید یافت</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src="./Content/Frame-1.png" alt="image" className='m-auto' />
            <p className='name'> کامیار منصوری</p>
            <p className='desc'>دوره ها با کیفیت و پیشرفته بودند. این دوره ها را در هیچ کجا نخواهید یافت</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src="./Content/Frame-1.png" alt="image" className='m-auto' />
            <p className='name'> کامیار منصوری</p>
            <p className='desc'>دوره ها با کیفیت و پیشرفته بودند. این دوره ها را در هیچ کجا نخواهید یافت</p>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
)
}

export default Slider