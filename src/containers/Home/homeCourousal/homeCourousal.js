import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeCard } from "../homeContainer/homeContainer";

import {data }from './data'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const HomeCourousal=()=>{

return (
<Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{data.map((e)=><HomeCard data={e}/>)}
  
</Carousel>)
}



/*<img alt="discover-experiences.svg" data-src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcb24f0f348723b37/621f466289fbff50b638e791/discover-experiences.svg" src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcb24f0f348723b37/621f466289fbff50b638e791/discover-experiences.svg" title="" data-test-id="usp-item-image" class="vanilla-lazy-loaded-image usp-card__icon loaded" data-v-33e1277a="" data-ll-status="loaded">*/