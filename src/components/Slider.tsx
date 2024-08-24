import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import './Slider.scss';

export type CarouselItem  = {
  imageUrl: string;
  caption: string;
}

type Props = {
  items: CarouselItem[];
}

const Slider = ({ items }: Props) => {

  const renderItems = (items: CarouselItem[]) => {
    return items.map((item, i) => (
      <SwiperSlide key={i}>
        <img src={item.imageUrl} alt={item.caption} />
        <p>{item.caption}</p>
      </SwiperSlide>
    ));
  }
  return (
    <Swiper 
      spaceBetween={30}
      loop={true}
      autoHeight={true}
      pagination={{
        clickable: true
      }} 
      navigation={true} 
      modules={[Navigation, Pagination]} 
      className="mySwiper"
    >
      {renderItems(items)}
    </Swiper>
  );
}
    
export default Slider;