import { Carousel } from 'nuka-carousel';

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
      <div className="slide" key={i}>
        <img src={item.imageUrl} alt={item.caption} width={600} />
        <p>{item.caption}</p>
      </div>
    ));
  }
  return (
    <Carousel showDots showArrows wrapMode="wrap">
      { renderItems(items)}
    </ Carousel>
  );
}
    
export default Slider;