import './Moments.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ContainerProps {
  name: string;
}

const Moments: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div>
        <iframe width="280" height="190" src="https://www.youtube-nocookie.com/embed/xF4SLslCzcg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <h3>Eleven vs. Mind Flayer</h3>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div>
      <iframe width="280" height="190" src="https://www.youtube-nocookie.com/embed/gXdA18JCJqY?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <h3>Billy's Sacrifice</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
      <iframe width="280" height="190" src="https://www.youtube-nocookie.com/embed/8MoUgNiUJI8?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
        <h3>Once ataca a 2 guardias y le rompe el cuello a uno</h3>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};

export default Moments;
