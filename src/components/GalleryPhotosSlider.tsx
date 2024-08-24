import Slider from "./Slider";
import type { CarouselItem } from '@/components/Slider';
const items: CarouselItem[] = [
  {
    imageUrl: '/galleryAssets/slider1/gallery1.jpg',
    caption: 'Gallery Entrance'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery2.jpg',
    caption: 'The wall of names'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery3.jpg',
    caption: 'Model of a horse stall converted to family accomodations'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery4.jpg',
    caption: 'A sample view of the information on touchscreens'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery5.jpg',
    caption: 'Touchscreen allows deep dives into family stories'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery6.jpg',
    caption: 'Learn about living conditions in the PAC'
  },
  {
    imageUrl: '/galleryAssets/slider1/gallery7.jpg',
    caption: 'Wider view of the gallery entrance'
  },
  {
    imageUrl: '/galleryAssets/slider1/nametags.jpg',
    caption: 'Create your own name tags resembling the orignal name tags'
  },

];

const GalleryPhotosSlider = () => {
  return <Slider items={items} />
}

export default GalleryPhotosSlider;